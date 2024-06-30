import './SignIn.css';
import { auth } from "../firebase";
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
 
  const signInHandler = (event) => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password).then(auth => { history.push('/') })
      .catch((err) => alert(err.message));
  };

  const register = (event) => {
    event.preventDefault();
    auth.createUserWithEmailAndPassword(email, password).then(auth => {
      if (auth) {
        history.push("/")
      }
    }).catch(error => alert(error.message));
  }

  return (
    <div className='signin'>
      <Link to='/home'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
          className='signin-logo'
          alt='Amazon Logo' />
      </Link>
      <div className='signin-container'>
        <h1>Sign In </h1>
        <form>
          <h5>E-mail</h5>
          <input
            type='text'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <h5>Password</h5>
          <input
            type='password'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button className='signin-btn' onClick={signInHandler}>Sign In</button>
        </form>
        <p>By sigining-in you agree to the AMAZON FAKE CLONE Terms & Conditions of Use and Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>
        <button className="signin-register-btn" onClick={register}>Create you Amazon Account</button>
      </div>
    </div>
  )
}

export default SignIn;
