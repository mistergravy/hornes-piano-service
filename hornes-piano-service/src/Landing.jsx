import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'
import Jumbotron from '../node_modules/react-bootstrap/lib/Jumbotron';
import Button from '../node_modules/react-bootstrap/lib/Button';
import Navbar from '../node_modules/react-bootstrap/lib/Navbar';
import Grid from '../node_modules/react-bootstrap/lib/Grid';
import Row from '../node_modules/react-bootstrap/lib/Row';
import Col from '../node_modules/react-bootstrap/lib/Col';
import Image from '../node_modules/react-bootstrap/lib/Image';
import Nav from '../node_modules/react-bootstrap/lib/Nav';
import NavItem from '../node_modules/react-bootstrap/lib/NavItem';
import NavDropdown from '../node_modules/react-bootstrap/lib/NavDropdown';
import MenuItem from '../node_modules/react-bootstrap/lib/MenuItem';

class Landing extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (

      <Jumbotron>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home">Home</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#">
              About
            </NavItem>
            <NavItem eventKey={2} href="#">
              Contact
            </NavItem>
            <NavDropdown eventKey={3} title="Services" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar>

        <h1 class="display-3">Horne's Piano Service</h1>
          <p>
            Welcome to Horne's Piano service! Our site is curently under construction, but you can get in touch with us using one of the methods below.
          </p>
          <Grid>
            <Row>
              <Col xs={6} md={4}>
              <p>Phone: XXX-XXX-XXXX</p>

              </Col>
              <Col xs={6} md={4}>
                Email: hornespianoservice@gmail.com
              </Col>
              <Col xs={6} md={4}>
                Facebook: Horne's Piano Service
              </Col>
            </Row>
          </Grid>
      </Jumbotron>

    )
  }
}

export default Landing;