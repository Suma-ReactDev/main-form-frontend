import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import http from '../http'
import toast, {Toaster} from 'react-hot-toast'


const paginationContext = createContext({});
export const usePaginationContext = () => useContext(paginationContext);

const renderData = (data) =>{
  return(
    <>{data.map((item)=>{
      return <li key={item.id} 
      className='text-white'>{item.name} </li>
    })}</>
  )
}


export const PaginationProvider = ({children}) =>{
  const [users, setUsers] = useState([]);

  const getFormData = useCallback( async () => {
    const response = await http.get("api/registers");
    const array = response.data.data;
    console.log(array);
    setUsers(array);
  },[]
)
useEffect(() => {
  const getData=getFormData()
  toast.promise(getData, {
   loading: 'Loading',
   success: 'Data retrieved successfully!',
   error: 'Error when fetching the Data',
 });
   }, [getFormData]);

  const value={renderData, users, setUsers, }
  return (
    <paginationContext.Provider value={value}>
      {children}
    </paginationContext.Provider>
  )
}

