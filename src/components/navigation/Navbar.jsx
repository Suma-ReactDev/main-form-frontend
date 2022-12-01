import {useState} from 'react';
import { Link,NavLink } from 'react-router-dom';
import Dropdown from './Dropdown'
import { navItems,activeLink,normalLink } from './navItems';

const Navbar = () => {
  
  const [dropdown, setDropdown] = useState();
  return (
    <header className='w-screen h-20 bg-cyan-600 '>
      <nav className='flex'>
      <h1 className='flex justify-start text-center items-center text-3xl text-white font-medium m-5'>Welcome</h1>
      <ul className='flex w-full justify-evenly list-none items-center '>
        {navItems.map((item)=>{
            return <li key={item.id}>
          <NavLink 
            to={`/${item.path}`}
            className={({isActive})=>isActive?`${activeLink}`:`${normalLink}`}
            >
              {item.title}
          </NavLink>
      </li>
          
        })}
        {/* <NavLink to={`/`} className={({isActive})=>isActive? 'bg-amber-400':'bg-amber-400 underline'}>Home</NavLink>
        <NavLink to={`/about`} className={({isActive})=>isActive? 'bg-amber-400':'bg-amber-400 underline'}>About</NavLink>
        <NavLink to={`/products`} className={({isActive})=>isActive? 'bg-amber-400':'bg-amber-400 underline'}>Products</NavLink> */}
      </ul>
      </nav>
    </header>
  )
}

export default Navbar