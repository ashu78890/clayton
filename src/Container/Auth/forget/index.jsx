import React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import './Forget.css';

function Forget() {
  return (
    <div className='content'> 
     <label className="ll">Enter your email here</label>
        <label className='label1'>Email</label>
        <Field name="Forget" component="input"type="text" />
    <Link to="/Auth/Login" className='link5'>Having Password?</Link>
    <button className='btn'>Submit</button>
    </div>
  )
}

export default reduxForm({
  form:'forget'
}) (Forget);