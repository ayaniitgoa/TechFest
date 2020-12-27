const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("cookie-session");
const bodyParser = require("body-parser");
const app = express();
const User = require("./user");
const Event = require("./event");
const { v4: uuidv4 } = require("uuid");
const path = require("path");
const jwt = require("jsonwebtoken");
const pug = require("pug");
const nodemailer = require("nodemailer");
const morgan = require("morgan");
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

app.set("views", path.join(__dirname, "views"));

app.set("view engine", "pug");

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.frontendURL, // <-- location of the react app were connecting to
    credentials: true,
  })
);

app.use(morgan("dev"));
//----------------------------------------- END OF MIDDLEWARE---------------------------------------------------

app.get("/", (req, res) => {
  res.send({
    success: "true",
  });
});

// Routes

// app.post("/api/register/google", async (req, res) => {
//   try {
//     console.log(req.body.email);
//     const email = req.body.email;
//     await User.findOne({ email }, async (err, user) => {
//       if (err) {
//         return res.send({
//           status: 409,
//           msg: "Registration unsuccessful, please try again later!",
//         });
//       } else {
//         const newUser = new User({
//           email,
//         });
//         await newUser.save();
//       }
//     });
//   } catch (error) {}
// });

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
          if (!doc) {
            const newUser = new User({
              email,
              college,
              contact,
              name,
            });
            await newUser.save();
            res.send({
              status: 201,
              msg: "Successfully registered!",
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

app.post("/api/:eventName/register", async (req, res) => {
  try {
    let userIds = [];
    console.log(req.body.email);
    if (!req.body || req.body.email.length < 1) {
      return res.send({
        status: 409,
        msg: "Atleast one participant email is required",
      });
    }
    for (var i = 0; i < req.body.email.length; i++) {
      await User.findOne({ email: req.body.email[i] }, (err, user) => {
        console.log(user);
        if (err)
          return res.send({
            status: 409,
            msg: "Registration unsuccessful, please try again later!",
          });
        if (!user) {
          userIds = [];
          return res.send({
            status: 400,
            msg: "One of the users is not registered",
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
            return res.send({
              status: 201,
              msg: "Registration Complete!",
            });
          }
          if (doc) {
            const doc = await Event.findOne({ name: req.params.eventName });

            for (var j = 0; j < doc.teams.length; j++) {
              for (var k = 0; k < doc.teams[j].participants.length; k++) {
                for (var m = 0; m < userIds.length; m++) {
                  if (
                    String(doc.teams[j].participants[k]) === String(userIds[m])
                  ) {
                    return res.send({
                      status: 400,
                      msg: "One of the participants is already registered",
                    });
                  }
                }
              }
            }

            doc.teams.push({
              participants: userIds,
            });
            await doc.save();

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
