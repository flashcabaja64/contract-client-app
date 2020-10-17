import React from 'react';
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { useFormFields } from '../../libs/hooksLib';
import './Login.css'

const Login = () => {
  
  const [fields, handleFieldChange] = useFormFields({
    username: '',
    password: ''
  })

  return (
    
    <Container fluid className="d-flex justify-content-center align-items-center">
      <Form onSubmit={e => e.preventDefault()}>
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Username"
            value={fields.username}
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