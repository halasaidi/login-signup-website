import React from "react";
import './Aboutus.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import imag from './images/model_1_bg.jpg.webp'
import imag2 from './images/product_1_bg.jpg.webp'


function Aboutus (){
    return(
    <div className="Aboutus">
<div >
    <h4 id="title"> AWESOME PRODUCTS</h4>
    <h3 id="title1">Featured Products</h3>
    <p id="discription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae <br/> nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut <br/> consequatur laboriosam ipsam.</p>
   </div> 
   <Container>
      <Row className="row1">
        <Col className="col1">
        <Image id="img" src={imag}/>
        
        </Col>
        <Col className="col2">
        <h4>About This Product</h4>
        <p id="text">Et tempora id nostrum saepe amet doloribus deserunt totam officiis cupiditate asperiores quasi accusantium voluptatum dolorem quae sapiente voluptatem ratione odio iure blanditiis earum fuga molestiae alias dicta perferendis inventore!</p>
        <p id="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus soluta assumenda sed optio, error at? </p>
        <h5>Price:</h5>
        <div className="d-flex">
<p id="price">$269.00</p>
<p> $69.00</p>
        </div>
        <div className="button4 d-flex">
            <button className="btn"  id="navlink"type='submit'>VIEW DETAILS</button><br/>
            <button className="btn"   id="navlink" type='submit'>ADD TO CART</button><br/>

        </div>
        </Col>
        
      </Row>
      <Row className="row2">
        <Col className="col2">
          <h4>About This Product</h4>
        <p id="text">Et tempora id nostrum saepe amet doloribus deserunt totam officiis cupiditate asperiores quasi accusantium voluptatum dolorem quae sapiente voluptatem ratione odio iure blanditiis earum fuga molestiae alias dicta perferendis inventore!</p>
        <p id="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus soluta assumenda sed optio, error at? </p>
        <h5>Price:</h5>
        <div className="d-flex">
<p id="price">$269.00</p>
<p> $69.00</p>
        </div>
        <div className="button4 d-flex">
            <button className="btn"   id="navlink" type='submit'>VIEW DETAILS</button><br/>
            <button  className="btn"  id="navlink" type='submit'>ADD TO CART</button><br/>

        </div>
        
        </Col>
        <Col className="col3"><Image id="img" src={imag2}/>
      
        </Col>

      </Row>
     
    </Container>
  
    </div>
    )
}
export default Aboutus;