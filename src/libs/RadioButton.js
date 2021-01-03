import React from 'react';
import { Form } from 'react-bootstrap';
import { Field } from 'formik';

const RadioButton = ({ label, name, options, ...rest }) => {
  return (
    <div className="form-control">
      <Field name={name} {...rest}>
        {
          ({ field }) => {
            return options.map(option => {
              return (
                <React.Fragment key={option.key}>
                  <Form.Check 
                    type="radio" 
                    id={option.value}
                    {...field}
                    value={option.value}
                    label={option.key}
                    name={option.value}
                    checked={field.value === option.value}
                >
                </Form.Check>
                </React.Fragment>
              )
            })
          }
        }
      </Field>
    </div>
  )
}

export default RadioButton;