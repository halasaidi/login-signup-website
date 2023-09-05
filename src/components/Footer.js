import React from 'react';
import './Footer.css';
import { Container, Row, Col } from 'react-bootstrap';
function Footer() {
  return (
<>

<footer className="footer">
      <Container>
        <Row>
          <Col md={3}>
            <h3>Contact Us</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing sed do eiusmod tempor incididun</p>
            <p>Address: 123 Main Street, Anytown, CA 12345 - USA.</p>
            <p>Email: example@example.com</p>
            <p>Phone: +1 123-456-7890</p>
        
          </Col>
          <Col md={3}>
            <h3>Information</h3>
            <p>About Us</p>
            <p>Delivery Information</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>Customer Service</p>
          </Col>
          <Col md={3}>
            <h3>My Account</h3>
            <p>Wishlist</p>
            <p>Newsletter</p>
            <p>Help Center</p>
           
          </Col>
          <Col md={3}>
          <h3>Newsletter</h3>
          <p>
          Get E-mail updates about our latest shop and special offers.
          </p>
          
          </Col>
        </Row>
      </Container>
    </footer>

</>

  )
}
 
export default Footer

