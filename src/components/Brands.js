import React from "react";
import './LatestBlo.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img1 from './images/Shipping/1 (1).webp'
import img2 from './images/Shipping/2 (1).webp'
import img3 from './images/Shipping/3 (1).webp'
import img4 from './images/Shipping/4.webp'
import img5 from './images/Shipping/5.webp'


function Brands(){
   
        const containerStyle = {
          marginTop: '7%' 
        };
    return(
        <Container style={containerStyle} >
            <Row>
<Col>
<img className="imges my-5 " src={img1} alt=""/>

</Col>
<Col>
<img className="imges my-5" src={img2}alt=""/>

</Col>
<Col>
<img className="imges my-5" src={img3} alt=""/>

</Col>
<Col>
<img className="imges my-5" src={img4} alt=""/>

</Col>
<Col>
<img className="imges my-5" src={img5} alt=""/>

</Col>
            </Row>
        </Container>
    )
}
export default Brands;