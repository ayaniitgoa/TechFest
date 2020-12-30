import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SiteContainer from "./Containers/SiteContainer/SiteContainer";
import PageNotFound from "./Containers/404Page/PageNotFound";

import IndividualEvent from "./Containers/IndividualEvent/IndividualEvent";
import IndividualEventRegistraion from "./Containers/IndividualEventRegister/IndividualEventRegistration";
import Register from "./Containers/Register/Register";
import RegistrationSuccess from "./Containers/RegistrationSuccess/RegistrationSuccess";
import Participants from "./Containers/Participants/Participants";
// import EventRegistrationSuccess from "./Containers/EventRegistrationSuccess/EventRegistrationSuccess";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route component={SiteContainer} path="/~students/Cepheus" exact />
          <Route
            component={IndividualEvent}
            path="/~students/Cepheus/event/:eventName(fizzbuzz|fiducia|coolyourengine|arduinostrial|uniteforunity|chitchatwithchatbot|cyberexpert|framethecrane|hackoverflow|circuitaldilemma|pandorasboxctf|pythonizeeverything|takecharge|theillusivereality|iceevhybrid)"
            exact
          />
          <Route
            component={IndividualEventRegistraion}
            path="/~students/Cepheus/event/:eventName(fizzbuzz|fiducia|coolyourengine|arduinostrial|uniteforunity|chitchatwithchatbot|cyberexpert|framethecrane|hackoverflow|circuitaldilemma|pandorasboxctf|pythonizeeverything|takecharge|theillusivereality|iceevhybrid)/register"
            exact
          />
          <Route
            component={Register}
            path="/~students/Cepheus/register"
            exact
          />
          <Route
            component={RegistrationSuccess}
            path="/~students/Cepheus/register/success"
            exact
          />
          <Route
            component={Participants}
            path="/~students/Cepheus/participants/:eventName(fizzbuzz|fiducia|coolyourengine|arduinostrial|uniteforunity|chitchatwithchatbot|cyberexpert|framethecrane|hackoverflow|circuitaldilemma|pandorasboxctf|pythonizeeverything|takecharge|theillusivereality|iceevhybrid)/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiZmVzdCI6IkNlcGhldXNpaXRnb2F0ZWNoZmVzdDgzMjA2NTM5NTkxMjM0IiwiaWF0IjoxNTE2MjM5MDIyfQ.mSWZCRAJlS7sKxxwgSDMOtZgiHqmpPAADcRZm-BF5X8"
            exact
          />
          {/* <Route
            component={EventRegistrationSuccess}
            path="/register/:eventName/success"
            exact
          /> */}
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
