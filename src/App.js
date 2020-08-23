import React, {Component} from 'react';
import './App.css'
import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer'
import Home from './components/Home/Home'
import CustomerList from './components/CustomerList/CustomerList'
import TodoList from './components/TodoList/TodoList'
import Misc from './components/Misc/Misc'
import NoMatch from './components/NoMatch/NoMatch'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="PageContainer" >
      <div className="ContentWrap">
        <Router>
          <NavigationBar />
          <Switch>
            <Route exact path="/Home" component={Home} />
            <Route exact path="/customerlist" component={CustomerList} />
            <Route exact path="/todolist" component={TodoList} />
            <Route exact path="/misc" component={Misc} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
