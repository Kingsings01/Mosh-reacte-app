import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import Blog from "./BlogPage/Blog";
import BookADemo from "./BookADemoPage/BookADemo";

function Routes() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/Home">HomePage</Link>
            </li>
            <li>
              <Link to="/another">Another Page</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/HomePage">
            <HomePage />
          </Route>
          <Route path="/BookADemoPage">
            <BookADemo />
          </Route>
          <Route path="/BlogPage">
            <Blog />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Routes;
