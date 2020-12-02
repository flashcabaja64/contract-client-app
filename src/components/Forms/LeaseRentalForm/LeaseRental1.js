import React from 'react';
import { Card, Form, Button, Col} from 'react-bootstrap';
import states from '../../../libs/store';
import './LeaseRental1.css'

const LeaseRental1 = ({ nextPage, prevPage }) => {

  function next(e) { nextPage(); }
  function prev(e) { prevPage(); }

  return (
    <Card.Body>
      <Card.Title>Property Information</Card.Title>
      <Card.Subtitle className="mb-2">Address</Card.Subtitle>
      <Form.Row>
        <Form.Group as={Col} sm="12">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Full Name"
          >    
          </Form.Control>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} sm="12">
          <Form.Label>Street Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Street Address"
          >    
          </Form.Control>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} sm="12">
          <Form.Label>Address 2</Form.Label>
          <Form.Control
            type="text"
            placeholder="Address 2"
          >    
          </Form.Control>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} sm="7">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="City"
          >    
          </Form.Control>
        </Form.Group>
        <Form.Group as={Col} sm="2">
          <Form.Label>State</Form.Label>
          <Form.Control as="select" className="stateSelect">
            {states.map((val, i) => (
              <option
                value={val.name} 
                key={i}>
              {val.abbreviation}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group as={Col} sm="3">
          <Form.Label>Zip-Code</Form.Label>
          <Form.Control
            type="text"
            maxLength="5"
            placeholder="Zip-Code"
          >    
          </Form.Control>
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
          type="button"
          onClick={next}
        >Continue
        </Button>
      </Form.Group>
    </Card.Body>
  )
}

export default LeaseRental1;