import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import TokenService from '../components/services/TokenService'

const PrivateRoute = ({ component: Component, ...rest }) => {
  return ( 
    <Route 
      {...rest}
      render={props => (
        TokenService.hasAuthToken() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />
        )
      )}
    />
  )
}

export default PrivateRoute;