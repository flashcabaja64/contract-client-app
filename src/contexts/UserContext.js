import React, { createContext } from 'react';
import TokenService from '../components/services/TokenService'

export const UserContext = createContext()

export const UserProvider = props => {

  const processLogin = (token) => {
    TokenService.saveAuthToken(token);
  }

  const processLogout = () => {
    TokenService.clearAuthToken();
  }

  const value = {
    processLogin,
    processLogout
  }

  return (
    <UserContext.Provider value={ value }>
      { props.children }
    </UserContext.Provider>
  )
}