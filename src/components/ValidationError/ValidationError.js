import React from 'react';

export default function ValidationError(props) {
  const validationStyle = {
    color:'red'
  }

  if(props.message) {
    return (
      <div className="error" style={validationStyle}>{props.message}</div>
    )
  }
  return <></>
}