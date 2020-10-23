export default function validateRegister(values) {
  let errors = {};
  let fName = values.firstName.trim();
  let lName = values.lastName.trim();
  let letters = /^[A-Za-z]+$/
  let emails = /\S+@\S+\.\S+/

  //First Name validation errors
  if(fName.length < 3) {
    errors.firstName = 'Please enter more than 3 characters';
  } else if (fName.length === 0) {
    errors.firstName = 'First Name required'
  } else if (!letters.test(fName)) {
    errors.firstName = 'Please enter alpha characters only'
  }
  //Last Name validation errors
  if(lName.length < 3) {
    errors.lastName = 'Please enter more than 3 characters';
  }
  if(!letters.test(lName)) {
    errors.lastName = 'Please enter alpha characters only'
  }
  //Email validation errors
  if(values.email.length === 0) {
    errors.email = 'Email address is required';
  } else if(!emails.test(values.email)) {
    errors.email = 'Email address is invalid';
  }
  //Password validation errors
  if((values.password.length || values.confirmPass.length) === 0) {
    errors.password = 'Password field cannot be blank'
  } else if((values.password.length || values.confirmPass.length) > 14) {
    errors.password = 'Password length cannot exceed 14 characters'
  } else if ((values.password.length || values.confirmPass.length) < 8) {
    errors.password = 'Password must be more than 8 characters'
  }
  if(values.password !== values.confirmPass) {
    errors.password = 'Passwords do not match'
  }
  return errors;
}