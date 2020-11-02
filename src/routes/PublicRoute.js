import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import TokenService from '../components/services/TokenService'

const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <Route 
      {...rest}
      render={props => (
        TokenService.hasAuthToken() ? (
          <Redirect to={'/register'} />
        ) : (
          <Component {...props} />
        )
      )}
    />
  )
}

export default PublicRoute;