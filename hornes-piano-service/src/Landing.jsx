import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'

class Landing extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div className= "jumbotron">
        <h1>Welcome to Horne's Piano Service</h1>
      </div>

    )
  }
}

export default Landing;