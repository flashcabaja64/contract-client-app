import React from 'react';
import { Switch, Route } from 'react-router-dom';
//import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';

import Header from './components/Header/Header';
import LoginPage from './pages/LoginPage'
import RegisterForm from './components/RegisterForm/RegisterForm';
import Home from './pages/Home';
//import Features from './components/Features/Features';
import LeaseRentalFormPage from './pages/LeaseRentalFormPage';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <PrivateRoute exact path="/forms" component={LeaseRentalFormPage}/>
        <Route exact path="/login" component={LoginPage}/>
        <Route exact path="/register" component={RegisterForm}/>
      </Switch>
    </div>
  );
}

export default App;