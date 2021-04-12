import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route, Link,
} from "react-router-dom";
import {Dynamic} from "./Dynamic";

function App() {

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/home/1">Home</Link>
          </li>
          <li>
            <Link to="/about/2">About</Link>
          </li>
          <li>
            <Link to="/users/3">Users</Link>
          </li>
        </ul>
      </nav>
        <Switch>
          <Route path="/:parent/:id">
            <Dynamic/>
          </Route>
        </Switch>
    </Router>
  );
}


export default App;
