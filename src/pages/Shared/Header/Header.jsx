import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Marquee from "react-fast-marquee";
import { Nav, NavDropdown, NavLink, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <Container className='mt-4'>
          <div className='text-center'>
          <img src={logo} alt="" />
           <p><small className='text-secondary'>Journalism Without Fear or Favour</small></p>
           <p>{moment().format("dddd, MMMM D ,YYYY")}</p>
          </div>
          <div className='d-flex'>
          <Button variant="danger">Latest</Button>
          <Marquee className='text-danger' speed={50}>
  I can be a React component, multiple React components, or just some text.
</Marquee>
          </div>
          <Navbar collapseOnSelect variant='light' bg="light" expand="lg">
      <Container>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Career</Nav.Link>

          </Nav>
          <NavLink href='#'>Profile</NavLink>
          <NavLink >
            <Button variant='secondary'>Login</Button>
          </NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </Container>
    );
};

export default Header;