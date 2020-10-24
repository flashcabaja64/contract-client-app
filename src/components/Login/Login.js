import './Login.css'
import React from 'react';
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { useFormFields } from '../../libs/hooksLib';
import ApiService from '../services/ApiService'
import TokenService from '../services/TokenService'

const Login = () => {
  const [fields, handleFieldChange] = useFormFields({
    email: '',
    password: ''
  })

  const loginSubmit= (e) => {
    e.preventDefault();
    ApiService.postLogin(fields).then(data => {
      TokenService.saveAuthToken(data.access_token)
      console.log(data)
    })
  }

  return (
    
    <Container fluid className="d-flex justify-content-center align-items-center">
      <Form onSubmit={loginSubmit}>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Email"
            value={fields.email}
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

        <Button variant="primary" type="submit">Login</Button>
      </Form>
    </Container>
  )
}

export default Login