import React, { Component } from 'react';
import Jumbotron from './components/jumbotron/jumbotron';
import './App.css';
import { Grid, Container, Segment, Header, Button } from 'semantic-ui-react';
// import ImageExampleCircular from './components/images';
import 'semantic-ui-css/semantic.min.css';
// import Styles from './components/button/styles.js';
// import axios from 'axios';
import './App.css';

const outerContainerStyles = {
  width: 'auto',
  height: '75'
}

const innerContainerStyles = {
  width: '90%',
  height: '75'
}

const columnStyles = {
  padding: '0',
  float: 'right'
  
}
class App extends Component {
  render() {
    return (
      <div className="App">
          <Jumbotron/>
      </div>
    );
  }
}

export default App;
