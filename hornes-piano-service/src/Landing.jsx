import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'
import Jumbotron from '../node_modules/react-bootstrap/lib/Jumbotron';
import Button from '../node_modules/react-bootstrap/lib/Button';

class Landing extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <Jumbotron>
        <h1>Horne's Piano Service</h1>
          <p>

          </p>
          <p>
            <Button bsStyle="primary">Learn more</Button>
          </p>
      </Jumbotron>

    )
  }
}

export default Landing;