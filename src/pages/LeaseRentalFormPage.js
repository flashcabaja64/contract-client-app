import React, { useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import LeaseRental1 from '../components/Forms/LeaseRentalForm/LeaseRental1';

const LeaseRentalFormPage = () => {
  const [step, setStep] = useState(1);

  function nextStep() { setStep(step + 1) }
  function prevStep() { setStep(step - 1) }

  function loadPage(step) {
    switch(step) {
      case 1:
        return (
          <LeaseRental1 
            nextPage={nextStep}
          />
        )
      case 2:
        return <h1>Form2</h1>
    }
  }
    

  return (
    <Container fluid className="d-flex justify-content-center align-items-center">
      <Card style={{ width: '30rem'}}>
        {loadPage(step)}
      </Card>
    </Container>
  )
}

export default LeaseRentalFormPage;