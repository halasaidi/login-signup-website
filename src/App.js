

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";

import Home from "./components/Home";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";
import ScrollToTopButton from "./components/ScrollToTopButton";



function App() {
 
  return (
    <div >
 <ScrollToTopButton/>
<BrowserRouter>
 <Header/>

<Routes>
   <Route path="/" element={<Home />} /> 

<Route path="/SignIn" element={<SignIn/>}/>
  <Route path="/SignUp" element={<SignUp/>}/>
</Routes>

</BrowserRouter>

    </div>
  );
}

export default App;
