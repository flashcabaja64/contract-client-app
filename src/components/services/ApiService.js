const ApiService = {
   postRegister(formFields) {
    fetch('https://backend-real-estate.herokuapp.com/register', {
      method: 'POST',
      header: {'Content-Type': 'application/json'},
      mode: 'no-cors',
      body: JSON.stringify(formFields)
    })
      .then(res => {
        if(!res.ok) { throw Error(res.statusText)}
        else { res.json();console.log(res) }
      })
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }
}

export default ApiService