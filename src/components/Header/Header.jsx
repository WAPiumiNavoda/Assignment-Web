import React from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { Link,useHistory } from 'react-router-dom';
import { logout } from '../../actions/userActions';



const Header = () => {
  const history = useHistory();
  const dispatch =useDispatch();
  const userLogin = useSelector(state =>state.userLogin);
  const { userInfo }= userLogin;
  const logoutHandler=()=>{
    dispatch(logout());
    history.push('/');
  }
 
  return (
    <div>
    <Navbar bg="primary" expand="lg" variant='dark'>
      <Container>
        <Navbar.Brand>
          <Link to='/'>
           Navbar scroll
          </Link>
         </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
     <Nav className='m-auto'>
         <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            {/* <Button variant="outline-success">Search</Button> */}
          </Form>
     </Nav>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link>
              <Link to='/mynotes'>
                My Notes
              </Link>
              </Nav.Link>
            <NavDropdown title="User Doings" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">My Profile</NavDropdown.Item>
              {/* <NavDropdown.Item href="#action4">Log Out</NavDropdown.Item> */}
              <NavDropdown.Divider />
              <NavDropdown.Item 
              onClick={logoutHandler}
              >
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header