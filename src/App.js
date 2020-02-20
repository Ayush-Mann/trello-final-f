import React from 'react';
// import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Home from "./components/home/home"
import Login from "./components/signing/login"
import Register from "./components/signing/register"
import { ThemeProvider } from "@chakra-ui/core"
import './App.css';
import LandingPage from './components/landingPage';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/teams">Teams</Link></li>
          <li><Link to="/users">Profile</Link></li>
          {/* <li><Link to="/">Profile</Link></li> */}
        </ul>
      </nav>
      <Switch>
        <Route path="/" component={LandingPage} exact/>
        <Route path="/users/login">
          <Login />
        </Route>
        <Route path="/users/register" component={Register} />
      </Switch>

    </Router>
    )
}

export default App;
