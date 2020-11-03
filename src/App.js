import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';

import Header from './components/Header/Header';
import LoginPage from './pages/LoginPage'
import RegisterForm from './components/RegisterForm/RegisterForm';
import Home from './pages/Home';
import Features from './components/Features/Features';
import SideNav from './components/Nav/SideNav';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <SideNav />
      <Switch>
        <Route exact path="/" component={Home}/>
        <PrivateRoute exact path="/features" component={Features}/>
        <Route exact path="/login" component={LoginPage}/>
        <Route exact path="/register" component={RegisterForm}/>
      </Switch>
    </div>
  );
}

export default App;