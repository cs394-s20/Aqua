import React from 'react';

import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const Navigation = () => {
  return (
    <div>
      <div className='navig'>
        <Navbar bg="dark" variant="dark" className='navig'>
          <Navbar.Brand href="#recipe"><NavLink to="/" style={{color: "white"}}>EasyHealthy</NavLink></Navbar.Brand>
          <Nav className="mr-auto">
            {/* <Nav.Link href="#recipe">Recipe</Nav.Link> */}
            {/* <Nav.Link href="#shoppingcart">ShoppingCart</Nav.Link> */}
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
      </div>
    </div>
  );
}

export default Navigation;