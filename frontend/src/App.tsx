import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

import GlobalStyles from "./GlobalStyles";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:username" component={Profile} />
      </Switch>

      <GlobalStyles />
    </Router>
  );
}

export default App;
