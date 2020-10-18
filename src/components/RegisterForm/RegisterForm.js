import React from 'react';
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { useFormFields } from '../../libs/hooksLib';

const RegisterForm = () => {

  const [fields, handleFieldChange] = useFormFields({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPass: ''
  })

  return (
    <Container fluid className="d-flex justify-content-center align-items-center">
      <Form onSubmit={e => e.preventDefault()}>
        <Form.Group controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter First Name"
            value={fields.firstName}
            onChange={handleFieldChange}
          > 
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Last Name"
            value={fields.lastName}
            onChange={handleFieldChange}
          >
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
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
        <Form.Group controlId="confirmPass">
          <Form.Label>Re-Enter Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Reenter Password"
            value={fields.confirmPass}
            onChange={handleFieldChange}
          >
          </Form.Control>
        </Form.Group>

        <Button variant="primary" type="submit">Login</Button>
      </Form>
    </Container>
  )
}

export default RegisterForm