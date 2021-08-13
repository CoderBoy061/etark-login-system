import React from "react";
import Navbar from "./components/Navbar";
import { Route } from "react-router-dom";
import Logout from "./components/Logout";
import SignIn from "./components/SignIn";
import Signup from "./components/Signup";
import Home from "./components/Home";


function App() {
  return (
    <div className="app">
      <Navbar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/signin">
        <SignIn />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route exact path="/logout">
        <Logout />
      </Route>

    </div>
  );
}

export default App;
