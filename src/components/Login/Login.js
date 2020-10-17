import React from 'react';
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import './Login.css'

const Login = () => {
  return (
    <Container fluid className="d-flex justify-content-center align-items-center">
      <Form onSubmit={e => e.preventDefault()}>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter Username"></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type="text" placeholder="Enter Password"></Form.Control>
        </Form.Group>

        <Button variant="primary" type="submit">Login</Button>
      </Form>
    </Container>
  )
}

export default Login