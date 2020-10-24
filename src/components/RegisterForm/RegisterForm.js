import './RegisterForm.css'
import React, { useState } from 'react';
import { Form, Container, Button, Card } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import useForm from '../../libs/useForm';
import validateRegister from '../validations/validateRegister';
import ValidationError from '../validations/ValidationError';
import ApiService from '../services/ApiService.js'

const RegisterForm = () => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPass: ''
    },
    submit,
    validateRegister
  )
  const history = useHistory()
  const [resStatus, setResStatus] = useState('')

  function submit() {
    ApiService.postRegister({
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password
    }).then(data => {
      console.log(data)
      if(data.toLowerCase().includes('failure')) {
        setResStatus('Email has already been registered')
        //return history.push('/')
      } else if(data.toLowerCase().includes('success')) {
        console.log(resStatus)
        setResStatus('Email registration successful. Redirecting you to the Login page')
        setTimeout(() => history.push('/login'), 3000)
      } 
    })
  }

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
                value={values.firstName}
                onChange={handleChange}
                maxLength="35"
                className={`${errors.firstName && 'inputError'}`}
              > 
              </Form.Control>
            </Form.Group>
            {errors.firstName && <ValidationError message={errors.firstName}/>}

            <Form.Group controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Last Name"
                value={values.lastName}
                onChange={handleChange}
                maxLength="35"
              >
              </Form.Control>
            </Form.Group>
            {errors.lastName && <ValidationError message={errors.lastName}/>}
            
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                value={values.email}
                onChange={handleChange}
              >
              </Form.Control>
            </Form.Group>
            {errors.email && <ValidationError message={errors.email}/>}

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                value={values.password}
                onChange={handleChange}
              >
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="confirmPass">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                value={values.confirmPass}
                onChange={handleChange}
              >
              </Form.Control>
            </Form.Group>
            {errors.password && <ValidationError message={errors.password}/>}
            {resStatus !== '' && <ValidationError message={resStatus}/>}

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

export default RegisterForm;