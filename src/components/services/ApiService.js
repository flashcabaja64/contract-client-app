const ApiService = {
   postRegister(formFields) {
    return fetch('https://backend-real-estate.herokuapp.com/register', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(formFields)
    })
      .then(async res => {
        const data = await res.json(); 
        if(!res.ok || res.status === 400) { 
         return data
        }
        return data 
      })
      .then(data => data.msg)
      .catch(err => console.log(err))
  },
  postLogin(formFields) {
    return fetch('https://backend-real-estate.herokuapp.com/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(formFields)
    })
      .then(async res => {
        const data = await res.json(); 
        if(!res.ok || res.status === 400) { 
         return data
        }
        return data 
      })
      .then(data => data)
      .catch(err => console.log(err))
  }
}

export default ApiService;