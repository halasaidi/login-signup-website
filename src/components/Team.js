import React from "react";
import './team.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img1 from './images/team/team1.jpg.webp'
import img2 from './images/team/team2.jpg.webp'
import img3 from './images/team/team3.jpg.webp'
import { SlCallEnd,SlSocialLinkedin,SlSocialInstagram,SlSocialFacebook } from "react-icons/sl";
function Team(){
    return(
        <>
<div className="title m-5  ">
    <h6 className="text-light-emphasis ">TEAM</h6>
    <h2>Leadership</h2>
</div>
<Container>
    <Row>
        <Col>
      <img  className="w-75 " src={img1} alt="" />
        <h3 id="name"> John Rooster </h3>
        <h5 id="name2">CO-FOUNDER, PRESIDENT</h5>
        <p id="para ">Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
        <div className="icon d-flex gap-3 " > 
        <SlCallEnd id="icon1"  />
<SlSocialFacebook id="icon2" />
<SlSocialInstagram id="icon3" />
<SlSocialLinkedin id="icon4" />
        </div>
        </Col>




        <Col>
        <img className="w-75 "  src={img2} alt="" />
        <h3 id="name"> Tom Sharp </h3>
        <h5 id="name2" >CO-FOUNDER, COO</h5>
        <p id="para">Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
        <div className="icon d-flex gap-3"> 
<SlCallEnd  id="icon1" />
<SlSocialFacebook id="icon2" />
<SlSocialInstagram id="icon3"  />
<SlSocialLinkedin id="icon4" />
        </div>
        </Col>





        <Col>
        <img className="w-75 " src={img3} alt="" />
        <h3 id="name" > Winston Hodson </h3>
        <h5 className="marketing" id="name2">MARKETING</h5>
        <p id="para" >Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
        <div className="icon d-flex gap-3" > 
        <SlCallEnd id="icon1" />
<SlSocialFacebook id="icon2" />
<SlSocialInstagram id="icon3" />
<SlSocialLinkedin id="icon4" />
        </div>
        </Col>
    </Row>
</Container>
        </>
    )
}
export default Team;