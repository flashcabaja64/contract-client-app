import React from 'react';
import { Card, Form, Button, Col} from 'react-bootstrap';
import states from '../../../libs/store';
import './LeaseRental1.css'

const LeaseRental1 = ({ nextPage }) => {

  function next(e) {
    //e.preventDefault();
    nextPage();
  }

  return (
    <Card.Body>
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
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Address"
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
      <Form.Group className="text-center">
        <Button 
          variant="primary" 
          type="button"
          onClick={next}
        >Continue
        </Button>
      </Form.Group>
    </Card.Body>
  )
}

export default LeaseRental1;