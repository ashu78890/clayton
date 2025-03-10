import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import {Field,reduxForm} from 'redux-form';
function Register () {
  return (
    <div  className='content'>
       <label className="ll">Fill in the details below the register</label>
      <label className='Label'>First Name</label>
      <Field name="FName" component="input"type="text" />
      <label  className='Label'>Last Name</label>
      <Field name="LName" component="input"type="text" />
       <label  className='Label'>Email</label>
       <Field name="Email" component="input"type="text" />
       <label  className='Label' >Contact</label>
       <Field name="Contact" component="input"type="text" />
       
       <label  className='Label' >Builder/Retailer/Business Name</label>  
       <Field name="Brnamr" component="input"type="text" />
       <label  className='Label'>Describe your request</label>
       <textarea required rows='4'/>
   
         <div className='checkbox'>
         <Field name="Checkbox" component="input"type="checkbox" />    <label  className='leb'>I agree to the term and condition
       </label>
       </div>
       <button>Register</button>
       <Link to= "/Auth/Login" className='link4'>Already a user? click here to join</Link>

    </div>
  )
}

export default reduxForm({
  form: "Register",
}) (Register);
