import {useUserContext} from './store/usercontext'
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from 'react-router-dom';
import Moment from 'moment'
const Registered = () => {
  const {users, deleteUser, selectUser} = useUserContext();
  
  // let user= users && users.map(({id, attributes: {name, email, profession, age}})=>(
  //   <div key={id}>
  //       <li className='font-bold'>{name}</li>
  //       <li>{email}</li>
  //       <li>{profession}</li>
  //       <li>{age}</li>
  //       {/* <li>{user.attributes.name}</li> */}
  //   </div>
  // ))
  const btnedit= 'bg-teal-500 text-white p-3 m-2 flex rounded'
  const btndelete= 'bg-red-600 text-white p-3 m-2 flex rounded'
  const td='border-2 border-solid border-teal-900 p-2 font-bold text-xl bg-slate-100 text-center bg-cyan-50'

  return (
    <div className='bg-slate-100 mx-auto p-5 rounded-md min-h-screen w-full
    flex flex-col gap-5 '>
      <h1 className='mx-auto text-3xl font-bold text-teal-900'>Registered Users</h1>
      <Link to='rgster' className='bg-slate-400 flex justify-center text-center p-5 text-2xl'>Click here to REGISTER</Link>
      <table className='border-collapse w-full '>
        <thead>
          <tr className='border-4 border-solid border-teal-900 p-2 font-bold text-2xl bg-cyan-100 text-teal-900'>
            <th>Name</th>
            <th>Email</th>
            <th>Profession</th>
            <th>Age</th>
            <th>D.O.B</th>
            <th>Gender</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{users ? users.map(({id, attributes: {name, email, profession, age, gender, date}})=>(
          <tr key={id}>
          {/* <td className={td}>{id}</td> */}
          <td className={td}>{name}</td>
          <td className={td}>{email}</td>
          <td className={td}>{profession}</td>
          <td className={td}>{age}</td>
          <td className={td}>{Moment(date).format('DD-MM-YYYY')}</td>
          <td className={td}>{gender}</td>
          <td className='border-2 border-solid border-teal-900 p-2 font-bold text-xl bg-cyan-50 text-center flex items-center justify-center'>
            <Link to='rgster-edit' className={btnedit}><BiEdit onClick={()=>{selectUser(id)}}/></Link>
            <button type='button' className={btndelete} onClick={()=>{deleteUser(id)}}><RiDeleteBin6Line /></button>
          </td>
          </tr>)):null}
          </tbody>
      </table>
    </div>
  )
}

export default Registered