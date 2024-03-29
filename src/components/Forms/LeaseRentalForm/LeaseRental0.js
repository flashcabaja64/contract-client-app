import React, { useState } from 'react';
import { Card, Form, Col, Button } from 'react-bootstrap';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import RadioButton from '../../../libs/RadioButton';
import DatePicker from '../../../libs/DatePicker';

const LeaseRental0 = ({ nextPage, errorStyle }) => {
  const [agree, setAgree] = useState('');
  // const [startDate, setStartDate] = useState(null);
  // const [endDate, setEndDate] = useState(null);

  const radioOnClick = (e) => { setAgree(e.target.value) }


  const initialValues = {
    typeAgreement: '',
    start_date: null,
    end_date: null,
    agreement_date: null
  }

  const validationSchema = Yup.object({
    typeAgreement: Yup.string().required('Please choose an option'),
    start_date: Yup.date().required('Required').nullable(),
    end_date: Yup.date().required('Required').nullable()
  })

  const onSubmit = values => {
    console.log(values)
    // alert(JSON.stringify(values, null, 2));
    nextPage();
  }

  const radioOptions = [
    { key: 'typeAgreement', value: 'standard', id: 'agree_standard', label: 'Standard Residential Lease' },
    { key: 'typeAgreement', value: 'month', id: 'agree_month', label: 'Month-to-Month Lease (Tenancy at Will)' }
  ]

  return (
    <Card.Body>
      <Card.Title>Type of Agreement</Card.Title>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
      {formik => (
        <Form onSubmit={formik.handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} sm="12">
              <RadioButton
                name={radioOptions[0].key}
                options={radioOptions}
                click={radioOnClick}
              /> 
              <ErrorMessage name="typeAgreement">{msg => <div style={errorStyle}>{msg}</div>}</ErrorMessage>
              {/* <Form.Check
                type="radio"
                id="agree_standard"
                value="standard"
                label="Standard Residential Lease"
                name="typeAgreement"
                checked={agree === 'standard'}
                onChange={radioOnClick}
              >    
              </Form.Check> */}
              {/* <Form.Check
                type="radio"
                id="agree_month"
                value="month"
                label="Month-to-Month Lease (Tenancy at Will)"
                name="typeAgreement"
                checked={agree === 'month'}
                onChange={radioOnClick}
              >    
              </Form.Check> */}
            </Form.Group>
          </Form.Row>
          {agree === 'standard' && (
            <Form.Row>
              <Form.Group as={Col} sm="6">
                <Form.Label>Start Date</Form.Label>
                <Form.Group>
                  {/* <DatePicker 
                    selected={startDate}
                    showYearDropdown
                    showMonthDropdown
                    dropdownMode="select"
                    placeholderText="Click to select Start Date"
                    className="form-control"
                    onChange={date => setStartDate(date)}
                  /> */}
                  <DatePicker 
                    name="start_date"
                    label="Pick a start date"
                  />
                  <ErrorMessage name="start_date">{msg => <div style={errorStyle}>{msg}</div>}</ErrorMessage>
                </Form.Group>
              </Form.Group>
              <Form.Group as={Col} sm="6">
                <Form.Label>End Date</Form.Label>
                <Form.Group>
                  {/* <DatePicker 
                    selected={endDate}
                    showYearDropdown
                    showMonthDropdown
                    dropdownMode="select"
                    placeholderText="Click to select End Date"
                    className="form-control"
                    onChange={date => setEndDate(date)}
                  /> */}
                  <DatePicker 
                    name="end_date"
                    label="Pick a end date"
                  />
                  <ErrorMessage name="end_date">{msg => <div style={errorStyle}>{msg}</div>}</ErrorMessage>
                </Form.Group>
              </Form.Group>
            </Form.Row>
          )}
          {agree === 'month' && (
            <Form.Row>
              <Form.Group as={Col} sm="6">
                <Form.Label>Start Date</Form.Label>
                <Form.Group>
                  {/* <DatePicker 
                    selected={startDate}
                    showYearDropdown
                    showMonthDropdown
                    dropdownMode="select"
                    placeholderText="Click to select Start Date"
                    className="form-control"
                    onChange={date => setStartDate(date)}
                  /> */}
                  <DatePicker 
                    name="start_date"
                    label="Pick a start date"
                  />
                  <ErrorMessage name="start_date">{msg => <div style={errorStyle}>{msg}</div>}</ErrorMessage>
                </Form.Group>
              </Form.Group>
              <Form.Group as={Col} sm="6">
                <Form.Label>Number of Days required to cancel</Form.Label>
                <Form.Group as={Col} xs="6" className='pl-0'>
                  {/* <Form.Control type="number" value="30" /> */}
                </Form.Group>
              </Form.Group>
              <Form.Text className="text-muted">
                The Minimum Time-Period for terminating a Month-to-Month Lease is <strong>30 days</strong> under the laws in California. If the Tenant remains on the property for more than 1-year the Landlord or Tenant must give at least 60 days notice. 
              </Form.Text>
            </Form.Row>
          )}
          <Form.Group className="text-center mt-2">
            <Button 
              variant="primary" 
              type="submit"
            >Continue
            </Button>
          </Form.Group>
        </Form>
      )}
      </Formik>
    </Card.Body>
  )
}

export default LeaseRental0;