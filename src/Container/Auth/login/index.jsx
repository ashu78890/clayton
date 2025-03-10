import React, { useEffect } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Field, reduxForm, Form } from "redux-form";
import { userLoginAction } from "Store/Action/action";
import { getAuthState } from "Store/selector";

function Login(props) {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const { fetching, token } = useSelector(getAuthState);
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  const handleFormSubmit = (data) => {
    dispatch(userLoginAction.fetch(data));
  };
  console.log(handleFormSubmit)
  return (
    <Form onSubmit={props.handleSubmit(handleFormSubmit)}>
      <div className="content">
        <label className="ll">Login To Your Account</label>
        <label className="Lep">Email</label>
        <Field name="email" component="input" type="text" />
        <label className="Lep">Password</label>
        <Field name="password" component="input" type="Password" />
        <div className="rejoin">
          <Field name="Check" component="input" type="Checkbox" />
          <label>Remember Me</label>
          <Link to="/Auth/Forget" className="link2">
            Forget Password?
          </Link>
        </div>

        <button type="button" onClick={props.submit}>
          Login
        </button>

        <Link to="/Auth/Register" className="link3">
          Not a register user?Fill up the registration form here
        </Link>
      </div>
    </Form>
  );
}

export default reduxForm({
  form: "login",
})(Login);
