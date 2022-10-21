import React from 'react'
import FormikControl from './FormikControl'
import {Formik, Form } from 'formik'
import * as Yup from 'yup'
import {useUserContext} from './store/usercontext'
import {Link} from 'react-router-dom'
import { formikcontrol } from './store/data'
const FormikContainer = () => {
  const {addFormData} = useUserContext();
  const dropdownOptions = [
    {id:1, label:'Gender', value:''},
    {id:2, label:'Male', value:'Male'},
    {id:3, label:'Female', value:'Female'}
  ]
 const initialValues = {name:'', email:'', profession:'', age:'', doB: '', gender:''} 
  return (
    <Formik
      initialValues= {initialValues}
      validationSchema={Yup.object({
        name:Yup.string()
        .required('Full Name is required')
        .matches(/^[A-Z]+\.?[a-zA-Z]+\s?[A-Z]?[a-zA-Z]\w*$/,{ message: 'Full Name is not Valid' }),
        email:Yup.string().email('It must be a valid Email').required('Email is required'),
        profession:Yup.string()
        .required('Profession is required')
        .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
        age:Yup.number().positive().integer().required('Age is required'),
        doB:Yup.date().required('Date of Birth is required'),
        gender:Yup.string().required('Please select gender'),
      })}
      onSubmit={(values, {resetForm})=>{
        alert(JSON.stringify(values, null, 2))
        // createNewUser(values)
        if(values){
          addFormData(values)
          resetForm({values:''})
          console.log(values)
        }
         
      }}>
        {formik => {
          console.log(formik)
         return(
          <Form className='flex flex-col text-center items-center justify-center
            mx-auto bg-slate-200 rounded shadow-lg p-3'>
                
            <h3 className='text-3xl text-zinc-600 font-bold'>Registration Form</h3>
            {formikcontrol.map(
              (item)=>
              <FormikControl control={item.control} name={item.name} key={item.name} {...item} />
            )}
            {/* <FormikControl control='input' type='text' label='Name' name='name' placeholder='Full Name'/>
            <FormikControl control='input' type='email' label='Email' name='email' placeholder='Email'/>
            <FormikControl control='input' type='text' label='Profession' name='profession' placeholder='Profession'/>
            <FormikControl control='input' type='number' label='Age' name='age' placeholder='Age' step={1} min={20}/>
            <FormikControl control='select' label='Gender' name='gender' options={dropdownOptions}/>
            <FormikControl control='date'  label='Date of Birth' name='doB'/> */}
            <button type='submit' className='text-xl bg-slate-300 p-2 m-5 text-zinc-600 font-extrabold'>
              SUBMIT</button>
            <button type='button' className='text-xl bg-slate-300 p-2 m-5 text-zinc-600 font-extrabold' 
            ><Link to='/'>Click here to see the List of Users</Link></button>   
          </Form>
         )
          
        }}
    </Formik>
  )
}

export default FormikContainer