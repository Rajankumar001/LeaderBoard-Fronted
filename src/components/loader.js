import React from 'react'
import { Spinner } from 'react-bootstrap';
import './loader.css'
const Loader = () => {
  return (
    <div>
       <Spinner animation="border" variant="success" className='loader' />
    </div>
  )
}

export default Loader