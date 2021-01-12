import React from 'react';
import DateView from "react-datepicker";
import { Field } from 'formik';

const DatePicker = ({ label, name, ...rest }) => {
  return (
    <Field name={ name }>
      {
        ({form, field}) => {
          const { setFieldValue } = form
          const { value } = field
          return (
            <DateView 
              showYearDropdown
              showMonthDropdown
              dropdownMode="select"
              className="form-control"
              id={name}
              { ...field }
              { ...rest }
              selected={value}
              onChange={val => setFieldValue(name, val)}
            />
          )
        }
      }
    </Field>
  )
}

export default DatePicker;