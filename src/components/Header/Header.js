import React,{useState,useEffect} from 'react';
import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import {NavDropdown} from 'react-bootstrap';
import { useDispatch} from 'react-redux';
import {logoutUser} from '../../Action/RegistrationAction';
const HeaderPage = () => {
  const [user, setUser] = useState(null);
  const dispatch =useDispatch();

  useEffect(() => {
    const storedUser = localStorage.getItem('LoginUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <>
    <div className='header-class'>
  <ul class="nav nav-underline">
  <li class="nav-item">
   <a class="nav-link " aria-current="page" href="/today">Today</a>
  </li>
  <li class="nav-item">
  <a class="nav-link" href="/Weeks">Week</a>
  </li>
  <li class="nav-item">
  <a class="nav-link" href="/months">Months</a>
  </li>
 
  {user ? (

<li className='User-Name'>
  <NavDropdown

    id="nav-dropdown-dark-example"

    title={user.name || 'User'}

    menuVariant=""

   className='user-dropdown'>

  <button  onClick={()=>{dispatch(logoutUser())}} className='logout-button'>Logout</button>
  </NavDropdown>

</li>

) : null}
         </ul>
            
  </div>

    </>
  )
}

export default HeaderPage;