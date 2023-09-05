import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import './Signup.css'
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signUpSuccess, setSignUpSuccess] = useState(false);
  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        setSignUpSuccess(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="signin container">
      <Form onSubmit={signUp}>
        <h1>Create Account</h1>
        <Form.Label>Email address</Form.Label>
        <Form.Control id="input"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></Form.Control>
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></Form.Control>
        <Button type="submit">Sign Up</Button>
      </Form>
      {signUpSuccess && (
        <p>
          Account created successfully! Please <Link to="/SignIn">log in</Link> to continue.
        </p>
      )}
    </div>
  );
};

export default SignUp;