import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SiteContainer from "./Containers/SiteContainer/SiteContainer";
import PageNotFound from "./Containers/404Page/PageNotFound";

import IndividualEvent from "./Containers/IndividualEvent/IndividualEvent";
import IndividualEventRegistraion from "./Containers/IndividualEventRegister/IndividualEventRegistration";
import Register from "./Containers/Register/Register";
import RegistrationSuccess from "./Containers/Registration/RegistrationSuccess";
// import EventRegistrationSuccess from "./Containers/EventRegistrationSuccess/EventRegistrationSuccess";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route component={SiteContainer} path="/" exact />
          <Route
            component={IndividualEvent}
            path="/event/:eventName(fizzbuzz|fiducia|coolyourengine|arduinostrial|uniteforunity|chitchatwithchatbot|cyberexpert|framethecrane|hackoverflow|circuitaldilemma|pandorasboxctf|pythonizeeverything|takecharge|theillusivereality|iceevhybrid)"
            exact
          />
          <Route
            component={IndividualEventRegistraion}
            path="/event/:eventName(fizzbuzz|fiducia|coolyourengine|arduinostrial|uniteforunity|chitchatwithchatbot|cyberexpert|framethecrane|hackoverflow|circuitaldilemma|pandorasboxctf|pythonizeeverything|takecharge|theillusivereality|iceevhybrid)/register"
            exact
          />
          <Route component={Register} path="/register" exact />
          <Route
            component={RegistrationSuccess}
            path="/register/success"
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
