import './Login.css'
import React, { useContext, useState } from 'react';
import { Form, Container, Button, Card } from 'react-bootstrap'
import { useFormFields } from '../../libs/hooksLib';
import ApiService from '../services/ApiService'
import { UserContext } from '../../contexts/UserContext'
import ValidationError from '../validations/ValidationError';
import TokenService from '../services/TokenService'

const Login = () => {
  const [fields, handleFieldChange] = useFormFields({
    user_email: '',
    password: ''
  })
  const [loginError, setLoginError] = useState(false)

  const User = useContext(UserContext);

  const loginSubmit= (e) => {
    e.preventDefault();
    ApiService.postLogin(fields).then(data => {
      //TokenService.saveAuthToken(data.access_token)
      if((data.msg.password || data.msg.user) == false) {
        setLoginError(true)
      } else {
        setLoginError(false)
        User.processLogin(data.access_token);
      }
      TokenService.hasAuthToken();
      console.log(data);
    })
  }

  return (
    <Container fluid className="d-flex justify-content-center align-items-center">
      <Card style={{ width: '20rem'}}> 
        <Card.Body>
        <Card.Title>Login</Card.Title> 
          <Form onSubmit={loginSubmit}>
            <Form.Group controlId="user_email">
              <Form.Label>Username/Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Username/Email"
                value={fields.user_email}
                onChange={handleFieldChange}
              > 
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                value={fields.password}
                onChange={handleFieldChange}
              >
              </Form.Control>
            </Form.Group>
            {loginError && <ValidationError message={'Username/Email or Password is incorrect'}/>}
            <Form.Group className="text-center">
              <Button variant="primary" type="submit">Login</Button>
            </Form.Group>
          </Form>
          </Card.Body> 
      </Card>   
    </Container>
  )
}

export default Login