import { signInWithEmailAndPassword ,signOut } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import './Signin.css'
import Header from "../Header";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Home from "../Home";


const SignIn = () => {
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const signIn = async (e) => {
    e.preventDefault();
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log("User signed in:", userCredential.user);
        setUser(userCredential.user)
        setEmail("");
        setPassword("");
        setLoggedIn(true);
    }
  
   
      catch(error){
        setError(error.message);
      };
  };
  const handleLogout = () => {

    signOut(auth)
      .then(() => {
        setUser(null);
        setLoggedIn(false);
      })
      .catch((error) => {
        console.error("Error logging out:", error);
      });
  };

  return (
<>
<Header user={user} handleLogout={handleLogout}/>
{loggedIn?(
  <>
   <p id="login">{user.email}</p>
<Home/>
</>
):(
  <div className=" form container">
<Form  onSubmit={signIn}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <h1>Log In to your Account</h1>
      {error && <p className="error-message">{error}</p>}
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"
          name="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} />
      </Form.Group>
<div className="button-container">
   
      <Button className="button1" variant="primary" type="submit" >
        LogIn
      </Button>
       

      
</div>
    </Form>
  </div>  )}

  
</>

  );
};

export default SignIn;