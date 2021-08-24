import "./App.css";
import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Application from "./Application";
import {  RecoilRoot } from "recoil";
import Admin from "./Pages/Admin";

function App() {

  return (
    <RecoilRoot>
      <Router>
        {/* <Admin /> */}
        <Application />
      </Router>
    // </RecoilRoot>
  );
}

export default App;
