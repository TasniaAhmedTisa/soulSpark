import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { AuthContext } from '../../provider/AuthProvider';

function NavScrollExample() {
        
        const {user, logOut } = useContext(AuthContext)
        const handleLogOut = () => {
          logOut()
          .then(() =>{})
          .catch(error => console.log(error))

        }
  return (
    <Navbar expand="lg" className="bg-body-tertiary m-2 p-3">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className='font-semibold text-2xl'>SoulSpark</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0 font-bold"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/biodatas">Biodatas</Nav.Link>
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
            {user && <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>}

          </Nav>
          <div className='flex gap-2'>
          
          </div>
          {
            user ? <> <button onClick={handleLogOut} className='btn btn-primary'>LogOut</button>
            </> : 
            <>
            <div className='flex gap-2'>
            <Button as={Link} to="/login" className='py-2'>Login</Button>
            <Button as={Link} to="/register" className='py-2'>Register</Button>
          </div>
            
            </>
          }

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
