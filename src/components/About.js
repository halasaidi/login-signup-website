import React from "react";
import "./About.css";
import Carousel from "react-bootstrap/Carousel";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img1 from "./images/Aboutimg/about1.jpg";
import img2 from "./images/Aboutimg/about2.jpg";
import img3 from "./images/Aboutimg/about3.jpg";
import img4 from "./images/Aboutimg/about4.jpg";
import img5 from "./images/Aboutimg/about5.jpg";
import img6 from "./images/Aboutimg/about6.jpg";
import img7 from "./images/Aboutimg/about7.jpg";
import img8 from "./images/Aboutimg/about8.jpg";
import img9 from "./images/Aboutimg/about9.jpg";
import img10 from "./images/Aboutimg/about10.jpg";
import img11 from "./images/Aboutimg/about11.jpg";
import img12 from "./images/Aboutimg/about12.jpg";
import img13 from "./images/Aboutimg/about13.jpg";
import img14 from "./images/Aboutimg/about14.jpg";
import img15 from "./images/Aboutimg/about15.jpg";

function About() {
  return (
    <Container>
      <Carousel className="slideshow">
        <Carousel.Item>
          <Row>
            <Col >
              <img
                className="img d-block w-100 h-100"
                src={img1}
                alt="First slide"
              />
            
            </Col>

            <Col>
              <img
                className=" d-block w-100 h-100"
                src={img2}
                alt="First slide"
              />
              
            </Col>

            <Col >
              <img
                className="d-block w-100 h-100"
                src={img3}
                alt="First slide"
              />
              
            </Col>

            <Col >
              <img
                className="d-block w-100 h-100"
                src={img4}
                alt="First slide"
              />
             
            </Col>

            <Col >
              <img
                className="d-block w-100 h-100"
                src={img5}
                alt="First slide"
              />
              
            </Col>

          </Row>

        </Carousel.Item>
        <Carousel.Item>
          <Row>
            <Col >
              <img
                className="img d-block w-100 h-100"
                src={img6}
                alt="First slide"
              /> 
            
            </Col>
           
            <Col >
              <img
                className=" d-block w-100 h-100"
                src={img7}
                alt="First slide"
              />
              
            </Col>

            <Col >
              <img
                className="d-block w-100 h-100"
                src={img8}
                alt="First slide"
              />
             
            </Col>

            <Col>
              <img
                className="d-block w-100 h-100"
                src={img9}
                alt="First slide"
              />
             
            </Col>

            <Col >
              <img
                className="d-block w-100 h-100"
                src={img10}
                alt="First slide"
              />
             
            </Col>

          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row>
            <Col >
              <img
                className="img d-block w-100 h-100"
                src={img11}
                alt="First slide"
              />
             
            </Col>
            <Col >
              <img
                className=" d-block w-100 h-100"
                src={img12}
                alt="First slide"
              />
             
            </Col>
            <Col >
              <img
                className="d-block w-100 h-100"
                src={img13}
                alt="First slide"
              />
             
            </Col>
            <Col >
              <img
                className="d-block w-100 h-100"
                src={img14}
                alt="First slide"
              />
             
            </Col>
            <Col >
              <img
                className="d-block w-100 h-100"
                src={img15}
                alt="First slide"
              />
              
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default About;
