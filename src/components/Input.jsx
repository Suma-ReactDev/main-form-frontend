import { ErrorMessage, Field } from 'formik'
import React from 'react'

const Input = (props) => {
  const {label, name, ...rest} = props
  return (
    <>
      <div className='ml-10 mr-10'>
        <label htmlFor={name} className='block text-gray-500 font-bold mb-1' >{label}</label>
        <Field id={name} name={name} {...rest} 
        className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
      </div>
      <div className="text-lg text-red-600 font-medium"><ErrorMessage name={name} /></div>
    </>
  )
}

export default Input