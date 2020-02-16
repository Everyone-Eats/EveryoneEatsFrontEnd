import React from 'react';

import './App.css'
import './css/map.css'


import MapView from "./screens/MapView"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

const App = function () {

  return (
    <Router>
      <Switch>
        <Route exact path="/" />
        <Route exact path="/maps/:search" component={MapView} />
      </Switch>
    </Router>
  );
}

export default App;
