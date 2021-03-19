import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

import GlobalStyles from "./GlobalStyles";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/:username" component={Profile} />
      </Switch>

      <GlobalStyles />
    </Router>
  );
}

export default App;
