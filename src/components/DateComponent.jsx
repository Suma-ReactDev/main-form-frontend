import React from 'react'
import FormikControl from './FormikControl'
import {Formik, Form } from 'formik'
import * as Yup from 'yup'
import {useUserContext} from './store/usercontext'
const DateComponent = () => {
  const {addFormData } = useUserContext();
  return (
    <Formik 
    initialValues={{doB:''}}
    validationSchema={Yup.object({
      doB:Yup.date().required('Date of Birth is required').nullable()
    })}
    onSubmit={(values, {resetForm})=>{
      alert(JSON.stringify(values, null, 2))
      // createNewUser(values)
      if(values){
        // addFormData(values)
        resetForm({values:''})
      }
    }}>
      {formik =>(
        <Form>
        <FormikControl control='date'  label='Date of Birth' name='doB'/>
        <button type='submit' className='text-xl bg-slate-300 p-2 m-5 text-zinc-600 font-extrabold'>SUBMIT</button>
        </Form>
      )
      }
    </Formik>
  )
}

export default DateComponent