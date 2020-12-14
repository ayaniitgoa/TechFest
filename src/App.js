import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SiteContainer from "./Containers/SiteContainer/SiteContainer";
import PageNotFound from "./Containers/404Page/PageNotFound";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <div id="navinAPP">
          <Navbar  />
        </div>
        <div id="anotherinAPP">
          <Switch>
            <Route component={SiteContainer} path="/" exact />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
