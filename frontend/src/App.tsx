import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

import GlobalStyles from "./GlobalStyles";
import Header from "./components/Header";
import { ProfileProvider } from "./hooks/profile";

function App() {
  return (
    <Router>
      <Header />

      <ProfileProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:username" component={Profile} />
        </Switch>
      </ProfileProvider>

      <GlobalStyles />
    </Router>
  );
}

export default App;
