import { useState } from 'react'
import Header from './Header'
import Input from './components/layout/Input'
// import DatePicker from 'react-datepicker'
import Select from './components/layout/Select'
import DatePicker from "react-multi-date-picker"
import DatePanel from "react-multi-date-picker/plugins/date_panel"
import {dt1, columns, tableDetail, data} from './dummy'
  const Report = () => {
    const [intialValues,setInitialValues] = useState({
      irNo:'',
      date:'',
      project:'',
      material:'',
      division:'',
      s1:'',
      s2:'',
      s3:'',
      remarks:'',
      refdoc:'',
    });
    const [secondobj, setSecondobj] = useState({
      compDetails:'',
      purposeTest:'',
      requisition:'',
      compId:'',
      refNo:'',
    })
    const onChangeHandler =(e)=>{  
      const fieldName = e.target.name;
      const fieldValue = e.target.value;   
      setInitialValues({
        ...intialValues,
        [fieldName]:fieldValue
      })
      console.log(intialValues)
    }
    

    const onSubmitHandler = (e) =>{
      e.preventDefault();
      console.log(intialValues)
      const enteredData = {
        irNo:intialValues.irNo,
        date:intialValues.date,
        project:intialValues.project,
        material:intialValues.material,
        compDetails:intialValues.compDetails,
        purposeTest:intialValues.purposeTest,
        requisition:intialValues.requisition,
        compId:intialValues.compId,
        refNo:intialValues.refNo,
        division:intialValues.division,
        s1:intialValues.s1,
        s2:intialValues.s2,
        s3:intialValues.s3,
        remarks:intialValues.remarks,
        refdoc:intialValues.refdoc,
        recomd:intialValues.recomd,
      }
      setInitialValues(enteredData)
      console.log(enteredData)
      setInitialValues({})
    }
    return (
      <div className="m-0 flex bg-slate-300 min-h-screen w-full rounded-md">
        <div className='grid bg-slate-100 rounded-xl justify-center m-10'>

          <form>
          <div className='m-10 border-separate border-2 '>
          <Header 
          sTitle={'Restricted'}
          asl= {'ADVANCED SYSTEMS LABORATORY'}
          title1= {'Directorate of CPDC'}
          title2= {'Vignanakancha, Hyderabad-500069'}
          title3= {'Test Report'}
        />
      <div className='m-0 grid justify-center '>
        <div className='grid grid-cols-2 gap-x-40 border-collapse  
        border-spacing-10 border-2 '>
          <Input
          label={'IR No: ASL/CPDC/DTL/IR NO.'}
          placeholder='IR No'
          name='irNo'
          type='text'
          errorMessage=''
          onChange= {onChangeHandler}
          value={intialValues.irNo}
          />
          <DatePicker
              style={{
                width: "100%",
                boxSizing: "border-box",
                height: "2.1rem",
                backgroundColor: 'rgb(224 242 254)',
                display:'flex',
              }}
              containerStyle={{
                width: "100%"
              }}
              placeholder='Date of Test'
              value= {onChangeHandler}
              multiple
              plugins={[
              <DatePanel />
              ]}
            /> 
      
        <Select 
          label={'Project'}
          onChange= {onChangeHandler}
          />
        <Select 
        label={'Material'}
        onChange= {onChangeHandler}
        />
        {dt1.map((input)=>(
          <Input 
            key={input.id}
            {...input}
            onChange= {onChangeHandler}
            />
        ))}
        <Select 
        label={'Division'}
        onChange= {onChangeHandler}
        />
      </div>
    </div>
      <Header 
        title3={'Test Results'} 
      />
          <table className='m-5 p-5 border-zinc-700 border-2 border-spacing-2'>
            <thead>
              <tr>
                {columns.map((column, index)=>(
                  <th 
                    key={index}
                    className='bg-slate-400 p-5 m-2'>{column}
                  </th>
                ))} 
              </tr>
            </thead>
            <tbody>
              {tableDetail.map((input, index)=>(
                <tr 
                className='bg-slate-50 border-separate 
                border-2 h-10 border-spacing-1 p-5 m-2
                text-center ' 
                key={index}>
                <td {...input}>{input.no} </td>
                <td {...input}>{input.param} </td>
                <td {...input}>{input.standard} </td>
                <td {...input}>{input.specvalue} </td>
                <td>
                  <Input 
                  name='s1'
                  type='number'
                  step='0.01'
                  errorMessage=''
                  onChange= {onChangeHandler}
                  />
                </td>
                <td>
                  <Input 
                  name='s2'
                  type='number'
                  step='0.01'
                  errorMessage=''
                  onChange= {onChangeHandler}/>
                </td>
                <td>
                  <Input 
                  name='s3'
                  type='number'
                  step='0.01'
                  errorMessage=''
                  onChange= {onChangeHandler}/>
                </td>
                <td {...input}>{input.average} </td>
              </tr>
              ))}
            </tbody>
          </table>
        
        <div className='grid m-5 p-5'>
          <Input 
          label={'Remarks if any'} 
          placeholder='Remarks'
          name='remarks'
          type='text'
          errorMessage=''
          onChange= {onChangeHandler}/>
          <Input 
          label={'Reference Acceptance Document'}
          placeholder='Reference Document'
          name='refdoc'
          type='text'
          errorMessage=''
          onChange= {onChangeHandler} />
          <Select 
          label={'Recommendation'}
          onChange= {onChangeHandler} />
        </div>
        <div className='grid grid-cols-3 gap-1'>
          <div className='ml-10'>
            {'Tested by'}
            <Select
            onChange= {onChangeHandler} 
            />
          </div>
          <div>
            {'Tested by'}
            <Select
            onChange= {onChangeHandler} 
            />
          </div>
          <div>
            {'Verified by'}
            <Select
            onChange= {onChangeHandler} 
            />
          </div>
        </div>
    <div className='grid justify-center mb-3 '>
      {'Approved by'}
      <Select 
      onChange= {onChangeHandler}
    />
    </div>
      <button 
        type='submit' 
        className='bg-sky-300 w-full p-1 h-10 font-bold text-purple-700 text-2xl'
        onClick={onSubmitHandler}
      >
        SUBMIT 
      </button>
     
          </div>
          </form>
            
        </div>
      </div>
 )
}

export default Report