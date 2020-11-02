import React from 'react';
import { useHistory } from 'react-router-dom';
import Login from '../components/Login/Login';

const LoginPage = () => {
  const history = useHistory();

  const onSuccessLogin = () => {
    history.push('/')
  }
  
  return (
    <Login onSuccessLogin={onSuccessLogin}/>
  )
}

export default LoginPage;