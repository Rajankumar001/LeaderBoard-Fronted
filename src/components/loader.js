import React from 'react'
import { Spinner } from 'react-bootstrap';
import './loader.css'
const Loader = () => {
  return (
    <div className='loading-element'>
       <Spinner animation="border" variant="success" className='loader' />
    </div>
  )
}

export default Loader