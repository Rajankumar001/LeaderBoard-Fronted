import React,{useState,useEffect} from 'react';
import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
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
    <div className='header-calss'>
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
  </ul>
  {user ? (
          <ul>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title={user.name || 'User'}
              menuVariant="dark"
             className='nav-item'>
            <NavDropdown.Item  onClick={()=>{dispatch(logoutUser())}}>Logout</NavDropdown.Item>
            </NavDropdown>
          </ul>
        ) : null}
            
  </div>

    </>
  )
}

export default HeaderPage;