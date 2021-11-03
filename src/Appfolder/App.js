import React from "react";
import { BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import "./index.css";
import Navbar from "./Navbar.js";
import Body from "./Body.js";
import Search from './Search';
import Login from './Login';
function App() {
  return (
    <Router>
     <Navbar/>
     <Switch>
        <Route exact path="/">
      <Body/>
        </Route>
        <Route exact path="/Home">
      <Body/>
        </Route>
        <Route exact path="/Search">
          <Search/>
        </Route>
        <Route exact path="/Login">
          <Login/>
        </Route>
       </Switch>
    </Router>
  );
}

export default App;
