import React from 'react';
// import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Home from "./components/home/home"
import Login from "./components/signing/login"
import Register from "./components/signing/register"
import { ThemeProvider, Flex } from "@chakra-ui/core"


import './App.css';
import LandingPage from './components/landingPage';

function App() {
  return (
    <Router>
      <div  className="header-primary">
        <nav>
          <ul>
            <Flex>
            <li><Link to ="/users/login">LogIn</Link></li>
            <li><Link to ="/users/register">Register</Link></li>
            <li><Link to ="/">Home</Link></li>
            </Flex>
          </ul>
        </nav>
      </div>
      
      <Switch>
        <Route path="/" component={LandingPage} exact/>
        <Route path="/users/login" component={Login} />
        <Route path="/users/register" component={Register} />
      </Switch>
      

    </Router>
    )
}

export default App;
