import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './home.css'
import Aboutus from "./Aboutus";
import Products from "./Products";
import About from "./About";
import Team from "./Team";
import SalesCount from "./SalesCount";
import ShippingInfo from "./ShippingInfo";
import LatestBlog from "./LatestBlog";
import Brands from "./Brands";
import Footer from './Footer'

function Home (){
    return(
    <div >
          <Container className="home ">
      <Row >
       <h2 id="h2">Shop With Us</h2>
<p id="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Laboriosam assumenda ea quo cupiditate facere deleniti fuga officia.</p>
      </Row>

         <button id="btn1">SHOP Now</button>


  
    </Container>
    <div className="sections">
        <Products/> 
        <About/>
   <Aboutus/> 
<Team/>
<SalesCount/>
<ShippingInfo/>
<LatestBlog/>
<Brands/>
< Footer/>
</div>
    </div>
    )
}
export default Home;