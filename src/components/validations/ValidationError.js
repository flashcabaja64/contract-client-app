import React from 'react';

export default function ValidationError({message}) {
  const validationStyle = {
    'color':'red',
    'fontSize': '0.8em',
    'marginTop': '-10px',
    'marginBottom': '10px'
  }

  if(message) {
    return (
      <div className="error" style={validationStyle}>{message}</div>
    )
  }
  return <></>
}