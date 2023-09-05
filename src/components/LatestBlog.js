import React from "react";
import './LatestBlo.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img1 from './images/Shipping/1.webp'
import img2 from './images/Shipping/2.webp'
import img3 from './images/Shipping/3.webp'

function LatestBlog(){
    return(
        <Container>
            <h4 id="latest">Latest Blog</h4>
            <Row>
<Col>
<img className="imges my-5" src={img1} alt=""/>
<h5 className="my-3">Some Winter Collections</h5>
<p>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed do eiusmod tempo</p>
<button id="button5">READ MORE</button>
</Col>
<Col>
<img className="imges my-5" src={img2}alt=""/>
<h5 className="my-3">My Perty Fashion</h5>
<p>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed do eiusmod tempo</p>
<button id="button5">READ MORE</button>
</Col>
<Col>
<img className="imges my-5" src={img3} alt=""/>
<h5 className="my-3">Perfect Fashion House</h5>
<p>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed do eiusmod tempo</p>
<button id="button5">READ MORE</button>
</Col>

            </Row>
        </Container>
    )
}
export default LatestBlog;