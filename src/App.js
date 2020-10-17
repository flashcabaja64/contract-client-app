import React from 'react';
import Header from './components/Header/Header'
import Login from './components/Login/Login'
import { Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" />
        <Route path="/login" component={Login}/>
      </Switch>
    </div>
  );
}

export default App;
