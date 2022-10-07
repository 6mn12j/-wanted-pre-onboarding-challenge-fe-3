import React from "react";
import About from "./pages/About";
import Root from "./pages/Root";
import Route from "./Router/Route";
import { Router } from "./Router/Router";

const App = () => {
  console.log("app");
  return (
    <Router>
      <Route path="/" component={<Root />} />
      <Route path="/about" component={<About />} />
    </Router>
  );
};

export default App;
