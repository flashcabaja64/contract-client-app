import React from 'react';
import { Card, Form, Col, Button } from 'react-bootstrap';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LeaseRental2 = ({ nextPage, prevPage, errorStyle }) => {
    function next(e) { nextPage(); }
    function prev(e) { prevPage(); }

    const initialValues = {
        addressName: ''

    }

    const validationSchema = Yup.object({
        addressName: Yup.string().required('Please write an address')
    })

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
                    {console.log(formik.values)}
                    <Form.Row>
                        <Form.Group>
                            <Form.Label>Address</Form.Label>
                            <Field
                                type="text"
                                className="form-control"
                                name="addressName"
                                placeholder="Type in your address"
                            >
                            </Field>
                            <ErrorMessage name="addressName">{msg => <div style={errorStyle}>{msg}</div>}</ErrorMessage>
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
                            onClick={next}
                        >Continue
                        </Button>
                    </Form.Group>
                </Form>
            )}
            </Formik>
        </Card.Body>
    )
}

export default LeaseRental2;