import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import './Userlogin.css';
import { SigninAction } from '../../Action/RegistrationAction';
import Loader from '../loader';
import PhoneInput from 'react-phone-number-input';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const User = useSelector((state) => state.SigninReducer);
  const { LoginUser, loading, error } = User;
  const [mobile, setMobile] = useState('');
  const [countryCode, setCountryCode] = useState('');

  useEffect(() => {
    if (error) {
      toast.error('Contact not found!');
    }
  }, [error]);

  useEffect(() => {
    const fetchCountryCode = async () => {
      try {
        const response = await axios.get('https://api-prod-new.tagmango.com/get-country-through-ip');
        const resultObj = response.data?.result && JSON.parse(response.data.result);
        setCountryCode(resultObj?.countryCode || 'US');
      } catch (error) {
        toast.error('Failed to fetch country code. Defaulting to US.');
        setCountryCode('US');
      }
    };
    fetchCountryCode();
  }, []);

  useEffect(() => {
    if (LoginUser && Object.keys(LoginUser).length > 0) {
      localStorage.setItem('LoginUser', JSON.stringify(LoginUser));
      navigate('/today');
    }
  }, [LoginUser, navigate]);

  const SigninHandler = async () => {
    if (!mobile || mobile.length !== 13) {
      toast.error('Please enter a valid 10-digit mobile number with country code.');
      return;
    }
    try {
      await dispatch(SigninAction({ mobile }));
    } catch (error) {
      toast.error('Error signing in. Please try again.');
    }
  };

  // If error exists, display red screen with maintenance message
  if (error) {
    return (
      <div
        style={{
          backgroundColor: 'red',
          color: 'white',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1>Server Under Maintenance</h1>
      </div>
    );
  }

  return (
    <>
      {LoginUser?.name ? (
        <div className="login-main-container">
          {loading && <Loader />}
          <div className="welcome-container">
            <p>
              <span>Welcome</span> {LoginUser.name}
            </p>
          </div>
          <div className="Login_container">
            <Form>
              <h2>Login</h2>
              <Form.Group className="mb-3" controlId="formBasicMobile">
                <Form.Label className="title">Mobile Number</Form.Label>
                <PhoneInput
                  international
                  defaultCountry={countryCode}
                  placeholder="Enter your 10-digit mobile number"
                  value={mobile}
                  onChange={setMobile}
                  className="form_input form-control"
                />
                <Form.Text className="text-muted">
                  <p>We'll never share your mobile number with anyone else.</p>
                </Form.Text>
              </Form.Group>
              <Button onClick={SigninHandler} className="login-button">
                Verify
              </Button>
            </Form>
          </div>
        </div>
      ) : (
        <div
          style={{
            backgroundColor: 'red',
            color: 'white',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h1>Server Under Maintenance</h1>
        </div>
      )}
    </>
  );
};

export default Signin;
