import React, { useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import LeaseRental0 from '../components/Forms/LeaseRentalForm/LeaseRental0';
import LeaseRental1 from '../components/Forms/LeaseRentalForm/LeaseRental1';
import LeaseRental2 from '../components/Forms/LeaseRentalForm/LeaseRental2';

const LeaseRentalFormPage = () => {
  const [step, setStep] = useState(1);

  function nextStep() { setStep(step + 1) }
  function prevStep() { setStep(step - 1) }

  const validationStyle = {
    'color':'red',
    'fontSize': '0.8em',
    'marginBottom': '5px',
    'position':'relative'
  }

  function loadPage(step) {
    let leaseProps = {
      nextPage: nextStep,
      prevPage: prevStep,
      errorStyle: validationStyle
    }

    switch(step) {
      case 1:
        return <LeaseRental0 nextPage={nextStep} errorStyle={validationStyle} />
      case 2:
        return <LeaseRental1 {...leaseProps} />
      case 3:
        return <LeaseRental2 {...leaseProps} />
    }
  }
    
  return (
    <Container fluid className="d-flex justify-content-center align-items-center">
      <Card style={{ width: '35rem' }}>
        { loadPage(step) }
      </Card>
    </Container>
  )
}

export default LeaseRentalFormPage;