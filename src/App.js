import React from 'react';
import PrivateRoute from './routes/PrivateRoute';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Home from './pages/Home';
import Features from './components/Features/Features';
import { Switch, Route } from 'react-router-dom';
import RegisterForm from './components/RegisterForm/RegisterForm';
import { UserProvider } from './contexts/UserContext'
import './App.css';

function App() {
  return (
    <UserProvider>
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <PrivateRoute exact path="/features" component={Features}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/register" component={RegisterForm}/>
        </Switch>
      </div>
    </UserProvider>
  );
}

export default App;
