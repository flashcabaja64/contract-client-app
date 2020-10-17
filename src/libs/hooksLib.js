import { useState } from 'react';

export function useFormFields(initialState) {
  const [value, setValue] = useState(initialState);

  return [
    value,
    function(e) { setValue({...value, [e.target.id]: e.target.value}) }
  ]
}