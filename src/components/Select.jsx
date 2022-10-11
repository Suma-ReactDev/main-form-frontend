import { ErrorMessage, Field } from 'formik'
import React from 'react'

const Select = (props) => {
  const {label, name, options, ...rest} = props
  return (
    <div className='ml-10 mr-10'>
      <label htmlFor={name} className='block text-gray-500 font-bold mb-1'>{label}</label>
      <Field id={name} name={name} {...rest} as={props.control} 
      className="border-2 bg-white border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500">
        {options.map((option)=> 
              <option
                className="bg-white"
                key={option.value}
                value={option.value}>
                {option.label}
              </option>
          )}
        </Field >
      <div className='text-lg text-red-600 font-medium'><ErrorMessage name={name} /></div>
    </div>
  )
}

export default Select