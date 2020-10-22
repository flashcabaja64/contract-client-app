export default function validateRegister() {
  let errors = {}

  let fName = fields.firstName.trim();
    let lName = fields.lastName.trim();
    let letters = /^[A-Za-z]+$/
    let errorMsg = {...handleFieldChange.errorMsg}

    if(fName.length < 3) {
      return errorMsg.firstName = 'Please enter more than 3 characters';
    }
    if(!letters.test(fName)) {
      errorMsg.firstName = 'Please enter alpha characters only'
    }
    if(lName.length < 3) {
      errorMsg.lastName = 'Please enter more than 3 characters';
    }
    if(!letters.test(lName)) {
      errorMsg.lastName = 'Please enter alpha characters only'
    }
    if(fields.password !== fields.confirmPass) {
      errorMsg.password = 'Passwords do not match'
    }
    console.log(errorMsg.firstName, fName)
}