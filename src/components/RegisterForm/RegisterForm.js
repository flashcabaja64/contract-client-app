import './RegisterForm.css'
import React from 'react';
import { Form, Container, Button, Card } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import ValidationError from '../ValidationError/ValidationError';
import ApiService from '../services/ApiService.js'
import { useFormFields } from '../../libs/hooksLib';

const RegisterForm = () => {

  const [fields, handleFieldChange] = useFormFields({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPass: '',
    errorMsg: {}
  })
  //console.log(fields)

  const validateForm = () => {
    let fName = fields.firstName.trim();
    let lName = fields.lastName.trim();
    let letters = /^[A-Za-z]+$/
    let errorMsg = {...handleFieldChange.errorMsg}

    if(fName.length < 3) {
      return errorMsg.firstName = 'Please enter more than 3 characters';
    }
    if(!letters.test(fName)) {
      errorMsg.firstName = 'Please enter alpha characters only'
    }
    if(lName.length < 3) {
      errorMsg.lastName = 'Please enter more than 3 characters';
    }
    if(!letters.test(lName)) {
      errorMsg.lastName = 'Please enter alpha characters only'
    }
    if(fields.password !== fields.confirmPass) {
      errorMsg.password = 'Passwords do not match'
    }
    console.log(errorMsg.firstName, fName)
  }

  const handleSubmit = e => {
    e.preventDefault();
    validateForm()
    // ApiService.postRegister({
    //   firstName: fields.firstName,
    //   lastName: fields.lastName,
    //   email: fields.email,
    //   password: fields.password
    // });
  }
  const { firstName } = fields.errorMsg

  return (
    <Container fluid className="d-flex justify-content-center align-items-center">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Sign-Up</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter First Name"
                value={fields.firstName}
                onChange={handleFieldChange}
                maxLength="35"
              > 
              </Form.Control>
            </Form.Group>
            {firstName !== '' ? <div>{firstName}</div> : null}

            <Form.Group controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Last Name"
                value={fields.lastName}
                onChange={handleFieldChange}
                maxLength="35"
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
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                value={fields.confirmPass}
                onChange={handleFieldChange}
              >
              </Form.Control>
            </Form.Group>
            <Form.Group className="text-center">
              <Button variant="primary" type="submit">Register</Button>
            </Form.Group>
            <Form.Text muted>Already Registered? <Link to="/login">Login</Link></Form.Text>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default RegisterForm