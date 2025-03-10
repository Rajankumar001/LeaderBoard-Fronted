import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from'axios';
import {ToastContainer,toast } from 'react-toastify';
import { useDispatch,useSelector } from 'react-redux';
import './Userlogin.css';
import { SigninAction } from '../../Action/RegistrationAction';
import Loader from '../loader';
import PhoneInput from 'react-phone-number-input'
const Signin = () => {
  const dispatch = useDispatch();
  const User = useSelector((state) => state.SigninReducer);
  console.log("User...",User);
  const {LoginUser, loading, error } = User;
  console.log("loginUser",LoginUser);
  console.log("error",error);
  const [mobile, setMobile] = useState('');
  const [countryCode, setCountryCode] = useState('');
useEffect(() => {
    console.log("Entered in userEffect for user");
    const user = localStorage.getItem('userid '); // Fetching the user from localStorage
    console.log("User stored in localStorage:", user); // Logging the user

   
    },[]);
  useEffect(() => {
    if (error) {
      toast.error("Contact not found!"); 
    }
  }, [error]);
  useEffect(() => {
    const fetchCountryCode = async () => {
      try {
        const response = await axios.get('https://api-prod-new.tagmango.com/get-country-through-ip');
        if (response.data && response.data.result) {
          const resultObj = JSON.parse(response.data.result);
          if (resultObj && resultObj.countryCode) {
            setCountryCode(resultObj.countryCode); 
          }
        }
      } catch (error) {
        console.error('Error fetching country code:', error);
      }
    };
    fetchCountryCode();
  }, []);

  useEffect(() => {
    console.log("LoginUser  in useEffect:", LoginUser )
    if (LoginUser && typeof LoginUser === 'string' && LoginUser.includes('DOCTYPE html')) {
      toast.error("Contact not found ! please check your number ");
    } else if (LoginUser && Object.keys(LoginUser).length > 0) {
      const userString = JSON.stringify(LoginUser);
      localStorage.setItem('LoginUser', userString);
      toast.success("contact verified successfully....");
      console.log("LoginUser stored in localStorage:", localStorage.getItem('LoginUser'));
      setTimeout(()=>{
        window.location.href = '/today';
      },1000)
    }
},[LoginUser]);
  const SigninHandler =async () => {
    
    if (!mobile || mobile.length !==13) {
      toast.error('Please enter a valid 10-digit mobile number');
      return;
    }
    const user = { mobile };
    try {
      await dispatch(SigninAction(user));
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  return (
    <>
      <div className='login-main-container'>
      {loading && <p><Loader/></p>}
        {error && <p>Error: {error}</p>}
        {LoginUser && (
        <div className='welcome-container'>
          <p><span>Welcome</span> {LoginUser.name}</p>
        </div>
      )}
        <div className='Login_container'>
          <Form>
            <h2>Login</h2>
            <Form.Group className="mb-3" controlId="formBasicMobile">
              <Form.Label className='title'>Mobile Number</Form.Label>
                <PhoneInput
                 international
                  defaultCountry={countryCode || "RU"}
                  placeholder="Enter your 10-digit mobile number"
                value={mobile}
                  onChange={setMobile}
                   className='form_input form-control'/>
              <Form.Text className="text-muted">
                <p>We'll never share your mobile number with anyone.</p>
              </Form.Text>
            </Form.Group>
            <Button onClick={SigninHandler} className='login-button'>Verify</Button>
            <ToastContainer/>
          </Form>
        </div>
      </div>
      </>
      

  );
};

export default Signin;
