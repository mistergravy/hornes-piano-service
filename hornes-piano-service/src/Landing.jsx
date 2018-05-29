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
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="#">Horne's Piano Service</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarColor02">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Services</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About</a>
              </li>
            </ul>
          </div>
        </nav>
        <h1 class="display-2">Hi there!</h1>
          <h3>
            Our site is curently under construction, but you can get in touch with us using one of the methods below.
          </h3>
          <Grid>
            <Row>
              <Col xs={6} md={4}>
              <h5><strong>Call/Text:</strong> 816-585-3980</h5>
              </Col>
              <Col xs={6} md={4}>
              <h5>
                Email: hornespianoservice@gmail.com
              </h5>
              </Col>
              <Col xs={6} md={4}>
              <h5>
                Facebook: Horne's Piano Service
              </h5>
              </Col>
            </Row>

            <Image src="/strings.jpg" responsive/>

          </Grid>


      </Jumbotron>

    )
  }
}

export default Landing;


