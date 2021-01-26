import './RegisterForm.css';
import React, { useState } from 'react';
import { Form, Container, Button, Card, Row } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import useForm from '../../libs/useForm';
import validateRegister from '../validations/validateRegister';
import ValidationError from '../validations/ValidationError';
import ApiService from '../services/ApiService.js';

const RegisterForm = () => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    {
      firstName: '',
      lastName: '',
      userName: '',
      primaryEmail: '',
      password: '',
      confirmPass: ''
    },
    submit,
    validateRegister
  )
  const history = useHistory();
  const [resStatus, setResStatus] = useState('');

  function submit() {
    ApiService.postRegister({
      firstName: values.firstName,
      lastName: values.lastName,
      userName: values.userName,
      primaryEmail: values.primaryEmail,
      password: values.password
    }).then(data => {
      //console.log(data)
      if(data.description.length !== '') {
        setResStatus(`${data.description}`)
        //return history.push('/')
      } else if(data.toLowerCase().includes('success')) {
        //console.log(resStatus)
        setResStatus('Email registration successful. Redirecting you to the Login page.')
        setTimeout(() => history.push('/login'), 3000)
      } 
    }).catch(err => console.log(err))
  }

  return (
    <Container fluid className="d-flex justify-content-center align-items-center">
      <Row className="col-10 col-offset-1">
        <div className="col-6">
          <h1>Project Real Estate</h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis maximus lacus, ac suscipit sapien. Pellentesque a consequat mi, ac mattis tellus. Aenean id mollis nisl, vitae cursus magna. Phasellus quam turpis, tempus dignissim dui sit amet, tincidunt mollis velit. Vestibulum sapien tellus, semper non orci ut, auctor ornare erat. Proin volutpat ex et ipsum blandit gravida. Donec varius nibh at erat fermentum mattis. Etiam iaculis a nibh quis malesuada. Nullam quis mauris a ex congue porta vel ac neque. Donec sagittis dui sed tellus commodo vehicula. Nullam id cursus metus. Sed at eros venenatis, pulvinar lectus eu, porttitor tellus.
          </p>
          <img src="http://placeimg.com/640/360/any" alt="placeholder" width="100%"/>
        </div>
        <div className="col-6 d-flex justify-content-center">
          <Card style={{ width: '20rem' }}>
            <Card.Body>
              <Card.Title>Sign Up for Free</Card.Title>
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
                      className={`${errors.lastName && 'inputError'}`}
                    >
                    </Form.Control>
                  </Form.Group>
                  {errors.lastName && <ValidationError message={errors.lastName}/>}

                  <Form.Group controlId="userName">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Username"
                      value={values.userName}
                      onChange={handleChange}
                      maxLength="35"
                      className={`${errors.userName && 'inputError'}`}
                    > 
                    </Form.Control>
                  </Form.Group>
                  {errors.userName && <ValidationError message={errors.userName}/>}

                  <Form.Group controlId="primaryEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Email"
                      value={values.primaryEmail}
                      onChange={handleChange}
                      className={`${errors.primaryEmail && 'inputError'}`}
                    >
                    </Form.Control>
                  </Form.Group>
                  {errors.primaryEmail && <ValidationError message={errors.primaryEmail}/>}

                  <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter Password"
                      value={values.password}
                      onChange={handleChange}
                      className={`${errors.password && 'inputError'}`}
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
                      className={`${errors.password && 'inputError'}`}
                    >
                    </Form.Control>
                  </Form.Group>
                  {errors.password && <ValidationError message={errors.password}/>}
                  {resStatus !== '' && <ValidationError message={resStatus}/>}

                  <Form.Group className="text-center">
                    <Button block variant="primary" className="submit_btn" type="submit">Register</Button>
                  </Form.Group>
                  <Form.Text muted>Already Registered? <Link to="/login">Login</Link></Form.Text>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </Row>
    </Container>
  )
}

export default RegisterForm;