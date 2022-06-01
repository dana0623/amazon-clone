import React, { useState } from 'react'
import "./Login.css"
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase';


function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e => {
      e.preventDefault();
      //login function
      auth.signInWithEmailAndPassword(email, password).then(auth=> {
          navigate('/')
      })
      .catch(error => alert(error.message))
  }

  const registerAccount = e => {
      e.preventDefault();

      auth.createUserWithEmailAndPassword(email, password).then((auth) => {
          console.log(auth);
          if (auth) {
              navigate('/')
          }
      })
      .catch(error => alert(error.message))
      //register function
  }

  return (
    <div className='login'>
        <Link to='/'>
        <img className='login_logo' 
             src="https://www.synointcdn.com/wp-content/uploads/2019/04/Amazon-Logo-PNG.png" 
             alt=""/>
        </Link>
        <div className='login_container'>
            <h1>Sign-in</h1>
            <form>
                <h5>
                    E-mail
                </h5>
                <input type='text' value={email} onChange={e => setEmail(e.target.value)}></input>
                <h5>
                    Password
                </h5>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)}></input>
                <button className='login_signInButton' type="submit" onClick={signIn}>Sign In</button>
            </form>
            <p>
            By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
            see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
            </p>

            <button className='login_registerButton' type="submit" onClick={registerAccount}>Create Amazon Account</button>
        </div>    
    </div>
  )
}

export default Login