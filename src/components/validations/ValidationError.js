import React from 'react';

export default function ValidationError({message}) {
  const validationStyle = {
    color:'red'
  }

  if(message) {
    return (
      <div className="error" style={validationStyle}>{message}</div>
    )
  }
  return <></>
}