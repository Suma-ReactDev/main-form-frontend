import { ErrorMessage, Field } from 'formik'
import React from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
// import addDays from 'date-fns/addDays' 
// import Moment from 'moment'
const DatePickerField = (props) => {
  const {label, name, ...rest} = props
  // const nodeRef= React.useRef(null)

  return (
    <div className='ml-10 mr-10'>
      <label htmlFor={name} className='block text-gray-500 font-bold mb-1'>{label}</label>
      <Field name={name}  >
        {({ field, meta, form: { setFieldValue } }) => {
          console.log(field)
        return (
          <DatePicker 
          className=" appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            {...field}
            selected={field.value || null}
            onChange={(val) => {
              setFieldValue(field.name, val);
            }}
            placeholderText={'Date of Birth'}
            autoComplete='off'
            dateFormat="dd/MM/yyyy"
            // minDate={new Date("01/01/1980")}
            maxDate={new Date()}
            yearDropdownItemNumber={40}
            scrollableYearDropdown={true}
            showYearDropdown
            showMonthDropdown
            // timeFormat="HH:mm"  
            // timeIntervals={20}  
            // timeCaption="time"  
            
            // minDate={new Date()}  
            // maxDate={addDays(new Date(), 7)}
              
          />
        );
      }}
      </Field>
      <div className='text-lg text-red-600 font-medium'><ErrorMessage name={name} /></div>
    </div>
  )
}

export default DatePickerField