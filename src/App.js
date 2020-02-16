import React, { useState } from "react";

import "./App.css";
import "./css/map.css";

import MapView from "./screens/MapView";
import Navbar from "./components/Navbar";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = function() {
  const [mapDisplay, setMapDisplay] = useState("donor");
  return (
    <Router>
      <Navbar setMapDisplay={setMapDisplay} />
      <Switch>
        <Route exact path="/" />
        <Route
          exact
          path="/maps/:search"
          component={() => <MapView mapDisplay={mapDisplay} />}
        />
      </Switch>
    </Router>
  );
};

export default App;
