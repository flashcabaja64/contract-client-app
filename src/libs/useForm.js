import { useState, useEffect } from 'react';

const useForm = (initialState) => {
  const [values, setValues] = useState(initialState)

  const handleChange = (e) => {
    const { id, value } = e.target;
    setValues({ ...values, [id]: value})
  } 

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Register Button Clicked!!')
  }

  return {
    handleChange,
    handleSubmit,
    values
  }
}

export default useForm;