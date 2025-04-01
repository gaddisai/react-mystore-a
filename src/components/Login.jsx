import React from 'react';
import { Link } from 'react-router-dom';
function Login() {
  return (
    <>
      <div>
        <h3>Login Form</h3>
        <p><input type="text" placeholder='Email address'></input></p>
        <p><input type="password" placeholder='Password'></input></p>
        <p><button>Log In</button></p>
        <p><Link to="/register">Create Account</Link></p>
      </div>
    </>
  );
}
export {Login}
