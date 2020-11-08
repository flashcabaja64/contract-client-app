import React, { createContext, useState } from 'react';
import TokenService from '../components/services/TokenService'

export const UserContext = createContext()

export const UserProvider = props => {

  const [data, setAuthData] = useState(null);

  const processLogin = (token) => {
    TokenService.saveAuthToken(token);
    setAuthData(token);
  }

  const processLogout = () => {
    TokenService.clearAuthToken();
    setAuthData(null);
  }

  const value = {
    processLogin,
    processLogout,
    data
  }

  return (
    <UserContext.Provider value={ value }>
      { props.children }
    </UserContext.Provider>
  )
}