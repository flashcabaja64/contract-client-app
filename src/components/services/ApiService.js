const ApiService = {
   postRegister(formFields) {
    return fetch('https://backend-real-estate.herokuapp.com/register', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(formFields)
    })
      .then(async res => {
        const data = res.json(); 
        if(!res.ok) { 
          const error = (data && data.message) || res.status;
          return Promise.reject(error);
        } else return data 
      })
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }
}

export default ApiService;