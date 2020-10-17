import { useState } from 'react';

export function useFormFields(initialState) {
  const [values, setValues] = useState(initialState);

  return [
    values,
    function(e) { setValues({...values, [e.target.id]: e.target.value}) }
  ]
}