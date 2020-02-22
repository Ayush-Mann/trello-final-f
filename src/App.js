import React from 'react';
// import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Home from "./components/home/home"
import Login from "./components/signing/login"
import Register from "./components/signing/register"
import { ThemeProvider, Flex, List, ListItem } from "@chakra-ui/core"

import './App.css';
import LandingPage from './components/landingPage';
import DashBoard from './components/dashboard/Dashboard';
import Board from './components/dashboard/board';

function App() {
  return (
    <Router>
      <div  className="header-primary">
        <nav>
          <List>
            <Flex>
              <ListItem m={4}><Link to ="/users/login">LogIn</Link></ListItem>
              <ListItem m={4}><Link to ="/users/register">Register</Link></ListItem>
              <ListItem m={4}><Link to ="/">Home</Link></ListItem>
            </Flex>
          </List>
        </nav>
      </div>
      
      <Switch>
        <Route path="/" component={LandingPage} exact/>
        <Route path="/users/login" component={Login} />
        <Route path="/users/register" component={Register} />
        <Route path="/:userId/b/" component={DashBoard}/>
        <Route path="/:userId/:boardId" component={Board} />
      </Switch>
      

    </Router>
    )
}

export default App;
