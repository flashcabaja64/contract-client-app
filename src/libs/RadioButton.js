import React from 'react';
import { Form } from 'react-bootstrap';
import { Field } from 'formik';

const RadioButton = ({ name, options, click, ...rest }) => {
  return (
    <Field name={name} {...rest}>
      {
        ({ field, form }) => {
          const {setFieldValue} = form
          return options.map((option, i) => {
            console.log('Value: ',option.value)
            console.log('Field: ',field)
            return (
              <React.Fragment key={i}>
                <Form.Check 
                  type="radio" 
                  {...field}
                  value={option.value}
                  label={option.label}
                  id={option.id}
                  name={option.key}
                  checked={field.value === option.value}
                  onChange={click}
                  onClick={val => setFieldValue(name, val.target.value)}
                >
                </Form.Check>
              </React.Fragment>
            )
          })
        }
      }
    </Field>
  )
}

export default RadioButton;