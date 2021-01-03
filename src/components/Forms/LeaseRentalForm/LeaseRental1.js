import React from 'react';
import { Card, Form, Button, Col} from 'react-bootstrap';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import states from '../../../libs/store';
import './LeaseRental1.css'

const LeaseRental1 = ({ nextPage, prevPage, errorStyle }) => {

  function next(e) { nextPage(); }
  function prev(e) { prevPage(); }

  const validationSchema = Yup.object({
    fullName: Yup.string().required('Full name required'),
    streetAddress: Yup.string().required('Street address required'),
    city: Yup.string().required('City required'),
    state: Yup.string().required('State required'),
    zipCode: Yup.number().min(5, 'Zip-Code must be 5 numbers').required('Zip-Code required')
  })

  const initialValues =  {
    fullName: '',
    streetAddress: '',
    address2: '',
    city: '',
    state: '',
    zipCode: ''
  }

  const onSubmit = values => {
    console.log(values)
  }

  return (
    <Card.Body>
      <Card.Title>Property Information</Card.Title>
      <Card.Subtitle className="mb-2">Address</Card.Subtitle>
      <Formik 
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
      {formik => (
        <Form onSubmit={formik.handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} sm="12">
              <Form.Label>Full Name</Form.Label>
              <Field
                type="text"
                className="form-control"
                name="fullName"
                placeholder="Full Name"
              >    
              </Field>
              <ErrorMessage name="fullName">{msg => <div style={errorStyle}>{msg}</div>}</ErrorMessage>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} sm="12">
              <Form.Label>Street Address</Form.Label>
              <Field
                type="text"
                className="form-control"
                name="streetAddress"
                placeholder="Street Address"
              >    
              </Field>
              <ErrorMessage name="streetAddress">{msg => <div style={errorStyle}>{msg}</div>}</ErrorMessage>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} sm="12">
              <Form.Label>Address 2</Form.Label>
              <Field
                type="text"
                className="form-control"
                name="address2"
                placeholder="Address 2"
              >    
              </Field>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} sm="7">
              <Form.Label>City</Form.Label>
              <Field
                type="text"
                className="form-control"
                name="city"
                placeholder="City"
              >    
              </Field>
              <ErrorMessage name="city">{msg => <div style={errorStyle}>{msg}</div>}</ErrorMessage>
            </Form.Group>
            
            <Form.Group as={Col} sm="2">
              <Form.Label>State</Form.Label>
              <Field 
                as="select" 
                className="form-control stateSelect"
                name="state"
              >
                <option value=""> -- </option>
                {states.map((val, i) => (
                  <option
                    value={val.name} 
                    key={i}>
                  {val.abbreviation}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="state">{msg => <div style={errorStyle}>{msg}</div>}</ErrorMessage>
            </Form.Group>

            <Form.Group as={Col} sm="3">
              <Form.Label>Zip-Code</Form.Label>
              <Field
                type="text"
                className="form-control"
                maxLength="5"
                name="zipCode"
                placeholder="Zip-Code"
              >    
              </Field>
              <ErrorMessage name="zipCode">{msg => <div style={errorStyle}>{msg}</div>}</ErrorMessage>
            </Form.Group> 
          </Form.Row>

          <Card.Subtitle className="mb-2 mt-2">Appliances</Card.Subtitle>
          <Form.Row>
            <Form.Group as={Col} sm="12">
              <Form.Label>List the appliances below</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Max characters: 77"
                style={{ resize: 'none'}}
                maxLength="77"
                rows={2}
              >    
              </Form.Control>
            </Form.Group>
          </Form.Row>
          <Form.Group className="text-center">
            <Button 
              variant="primary" 
              type="button"
              onClick={prev}
            >Previous
            </Button>
            <Button 
              variant="success" 
              type='submit'
              // type="button"
              // onClick={next}
            >Continue
            </Button>
          </Form.Group>
        </Form>
      )}
      </Formik>
    </Card.Body>
  )
}

export default LeaseRental1;