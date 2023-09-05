import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import img1 from './images/Shipping/img1.webp'
import img2 from './images/Shipping/img2.webp'
import img3 from './images/Shipping/img3.webp'
import img4 from './images/Shipping/img4.webp'

const ShippingInfo = () => {
    return (
  <Container className='m-lg-5 '>
    <Row>
<Col>
<div className='d-flex gap-3'>
<img className='w-25 h-25' src={img1} alt=''/>
<div >
<h5>FREE SHIPPING</h5>
<p>Free shipping on all order</p>
</div>
</div>
</Col>

    <Col>
<div className='d-flex gap-2'>
<img className='w-25 h-25' src={img2} alt=''/>
<div >
<h5>SUPPORT 24/7</h5>
<p>Support 24 hours a day</p>
</div>
</div>
</Col>   




<Col>
<div className='d-flex gap-2 '>
<img className='w-25 h-25' src={img3} alt=''/>
<div >
<h5>MONEY RETURN</h5>
<p>Back guarantee under 5 days</p>
</div>
</div>
</Col>   

<Col>
<div className='d-flex gap-2'>
<img className='w-25 h-25' src={img4} alt=''/>
<div >
<h5>ORDER DISCOUNT</h5>
<p>Onevery order over $150</p>
</div>
</div>
</Col>   
    </Row>
  </Container>
    );
};

export default ShippingInfo;
