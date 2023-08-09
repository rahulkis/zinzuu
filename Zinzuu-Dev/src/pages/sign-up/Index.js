import React, { useEffect, useState } from "react";
import { Button, Card, Container, Row } from "react-bootstrap";
import "../../template/assets/css/signup.css";
import Logo from '../../logo_555.jpg';

function Index(props) {
  return (
    <>
      <Container>
        <Row style={{paddingTop : '30px', paddingBottom : '30px'}}>
            <img src={Logo} />
        </Row>
        <Row style={{paddingTop : '30px', paddingBottom : '30px'}}>
          <h2 style={{fontSize : '20px', textAlign : 'center'}}>Welcome to our VIP Club. You are just moments away from becoming a member</h2>
        </Row>
        <Row><Button>NEW CUSTOMER</Button></Row>
        <Row><Button>FUTURE CUSTOMER</Button></Row>
      </Container>
    </>
  );
}

export default Index;
