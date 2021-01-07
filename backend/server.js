const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const User = require("./user");
const Event = require("./event");
const morgan = require("morgan");
const { nanoid } = require("nanoid");
const helmet = require("helmet");
const path = require("path");
const https = require("https");
// const MongoStore = require("connect-mongo")(session);
require("dotenv").config();
//----------------------------------------- END OF IMPORTS---------------------------------------------------
mongoose.connect(
  process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  (err) => {
    if (err) console.log(err);
    else console.log("Mongoose Is Connected");
  }
);

// Middleware
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*", // <-- location of the react app were connecting to
  })
);

app.use(morgan("dev"));
//----------------------------------------- END OF MIDDLEWARE---------------------------------------------------

app.get("/", (req, res) => {
  res.send({
    success: "true",
  });
});

async function preProcess(data, res) {
  var participantData = [];
  for (var i = 0; i < data[0].teams.length; i++) {
    var pd = [];
    for (var j = 0; j < data[0].teams[i].participants.length; j++) {
      const doc = await User.findOne({ _id: data[0].teams[i].participants[j] });
      if (doc) {
        pd.push(doc);
      }
      // await User.findOne(
      //   { _id: data[0].teams[i].participants[j] },
      //   (err, pD) => {
      //     if (err)
      //       return res.send({
      //         msg: "Error",
      //       });
      //     if (pD) {
      //       pd.push(pD);
      //     }
      //   }
      // )
    }
    participantData.push(pd);
  }

  return res.send(participantData);
}

app.get(`/api/teams/:eventName/${process.env.protectedToken}`, (req, res) => {
  try {
    Event.find({ name: req.params.eventName }, async (err, data) => {
      if (err)
        return res.send({
          msg: "Error",
        });
      if (!data) {
        return res.send({
          data: [[]],
        });
      }

      if (data.length < 1) {
        return res.send({
          data: [[]],
        });
      }

      if (data[0].teams) {
        preProcess(data, res);
      }
    });
  } catch (error) {
    res.send([[]]);
  }
});

app.get(`/api/allusers/${process.env.protectedToken}`, (req, res) => {
  try {
    User.find({}, (err, data) => {
      if (err) return res.send({});
      return res.send({
        data,
      });
    });
  } catch (error) {
    return res.send({});
  }
});

// Routes

app.post("/api/register/mail", async (req, res) => {
  try {
    let email = req.body.email;
    let name = req.body.name;
    let contact = req.body.contact;
    let college = req.body.college;

    if (!email) {
      return res.send({
        status: "409",
        msg: "Please register using Google from the Home Page",
      });
    }

    if (!name || !contact || !college) {
      return res.send({
        status: "409",
        msg: "Please fill all the fields",
      });
    }

    await User.findOne({ email }, async (err, user) => {
      if (err)
        return res.send({
          status: 409,
          msg: "Registration unsuccessful, please try again later!",
        });
      if (user) {
        return res.json({
          status: 400,
          msg: "User already registered!",
          user: user,
        });
      }
      if (!user) {
        await User.findOne({ email: email }, async (err, doc) => {
          if (err)
            return res.send({
              status: 409,
              msg: "Registration unsuccessful, please try again later!",
            });
          if (doc) res.redirect(`${process.env.frontendURL}`);
          const uid = nanoid(10);
          if (!doc) {
            const newUser = new User({
              email,
              college,
              contact,
              name,
              uid: uid,
            });
            await newUser.save();
            res.send({
              status: 201,
              msg: "Successfully registered!",
              uid: uid,
            });
          }
        });
      }
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: 400,
      msg: "Some error occured, please try again later!",
    });
  }
});

app.post("/api/checkuser", (req, res) => {
  console.log(req.body);
  try {
    User.findOne({ email: req.body.email }, (err, user) => {
      if (err) {
        return res.send({
          status: 400,
          msg: "Registration failed, Please try again.",
          user: user,
        });
      }
      if (!user) {
        return res.send({
          status: 200,
          msg: "User not registered",
          user: {},
        });
      }
      if (user) {
        return res.send({
          status: 200,
          msg: "User found",
          user: user,
        });
      }
    });
  } catch (error) {
    return res.send({
      status: 400,
      msg: "Registration unsuccessful! Please try again",
    });
  }
});

function hasDuplicates(array) {
  return new Set(array).size !== array.length;
}

app.post("/api/:eventName/register", async (req, res) => {
  try {
    let userIds = [];

    // console.log(req.body.ids);
    if (!req.body || req.body.ids.length < 1) {
      return res.send({
        status: 409,
        msg: "Atleast one participant id is required",
      });
    }

    if (hasDuplicates(req.body.ids)) {
      return res.send({
        status: 409,
        msg: "Duplicate ids entered.",
      });
    }

    if (req.params.eventName === "arduinostrial" && req.body.ids.length < 2) {
      return res.send({
        status: 409,
        msg: "Each team should have two members.",
      });
    }
    if (req.params.eventName === "uniteforunity" && req.body.ids.length < 3) {
      return res.send({
        status: 409,
        msg: "Each team must have atleast three members.",
      });
    }
    if (req.params.eventName === "hackoverflow" && req.body.ids.length < 3) {
      return res.send({
        status: 409,
        msg: "Each team must have atleast three members.",
      });
    }
    if (
      req.params.eventName === "chitchatwithchatbot" &&
      req.body.ids.length < 3
    ) {
      return res.send({
        status: 409,
        msg: "Each team must have atleast three members.",
      });
    }

    for (var i = 0; i < req.body.ids.length; i++) {
      await User.findOne({ uid: req.body.ids[i] }, (err, user) => {
        if (err)
          return res.send({
            status: 409,
            msg: "Registration unsuccessful, please try again later!",
          });
        if (!user) {
          userIds = [];
          return res.send({
            status: 400,
            msg: "Unregistered user id(s) entered.",
          });
        }
        if (user) {
          userIds.push(user._id);
        }
      });
    }

    if (userIds.length > 0) {
      const options = { upsert: true, new: true, setDefaultsOnInsert: true };

      await Event.findOneAndUpdate(
        { name: req.params.eventName },
        options,
        async (err, doc) => {
          if (err)
            return res.send({
              status: 409,
              msg: "Registration unsuccessful, please try again later!",
            });
          if (!doc) {
            const newEvent = new Event({
              name: req.params.eventName,
              teams: [
                {
                  participants: userIds,
                },
              ],
            });
            await newEvent.save();
            for (var i = 0; i < req.body.ids.length; i++) {
              await User.findOneAndUpdate(
                { uid: req.body.ids[i] },
                {
                  $addToSet: { events: req.params.eventName },
                },
                (err, result) => {
                  if (err)
                    return res.send({
                      status: 400,
                      msg: "Registered Successfully",
                    });
                }
              );
            }

            return res.send({
              status: 201,
              msg: "Registration Complete!",
            });
          }
          if (doc) {
            const invalidData = [];
            const doc = await Event.findOne({ name: req.params.eventName });

            for (var j = 0; j < doc.teams.length; j++) {
              for (var k = 0; k < doc.teams[j].participants.length; k++) {
                for (var m = 0; m < userIds.length; m++) {
                  if (
                    String(doc.teams[j].participants[k]) === String(userIds[m])
                  ) {
                    invalidData.push(req.body.ids[m]);
                  }
                }
              }
              if (invalidData.length > 0) {
                console.log(invalidData);

                return res.send({
                  status: 400,
                  msg: "One of the participants is already registered",
                  userId: invalidData,
                });
              }
            }

            doc.teams.push({
              participants: userIds,
            });

            await doc.save();

            for (var i = 0; i < req.body.ids.length; i++) {
              await User.findOneAndUpdate(
                { uid: req.body.ids[i] },
                {
                  $addToSet: { events: req.params.eventName },
                },
                (err, result) => {
                  if (err)
                    return res.send({
                      status: 400,
                      msg: "Registered Successfully",
                    });
                }
              );
            }
            return res.send({
              status: 201,
              msg: "Registration complete!",
            });
          }
        }
      );
    }
  } catch (error) {
    res.send({
      status: 400,
      msg: "Error occured! Please try again later!",
    });
  }
});

//----------------------------------------- END OF ROUTES---------------------------------------------------
//Start Server
PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server Has Started");
});
