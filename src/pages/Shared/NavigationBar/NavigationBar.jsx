import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../providers/AuthProvider';

const NavigationBar = () => {

    const {user} = useContext(AuthContext);

    return (
        <Container>
            <Navbar collapseOnSelect variant='light' bg="light" expand="lg">
      <Container>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav className='mx-auto'>
              <Link to='/category/0'>Home</Link>
            </Nav>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Career</Nav.Link>

          </Nav>
         {user && <Nav.Link href='#'><FaUserCircle style={{fontSize:'2rem'}}></FaUserCircle></Nav.Link>}
          <Nav >
            {user ? 
            <Button variant='secondary'>LogOut</Button>:

            <Link to='/login'>
            <Button variant='secondary'>Login</Button>
            </Link>
            
          }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </Container>
    );
};

export default NavigationBar;