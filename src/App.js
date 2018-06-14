import React, { Component } from 'react';
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
      <Container style={ outerContainerStyles } textAlign='center'>
        <Segment className="ui tertiary" raised>
          <Header as='h1'>Get Giphy with React!</Header>    
        </Segment>
        <Container style={ innerContainerStyles } >
          <Grid>
            <Grid.Column width={1} style= { columnStyles }> 
            {/*  <Button  onClick={ this.handleClick } className="ui inverted green button" style={Styles}>Giphy Me!</Button> */}
            </Grid.Column>
     {/* <Grid.Column>
     <Grid columns={4} > */}
                {this.state.giphy.map((giph) => (
                <Grid.Column width={3}> 
                 {/* <ImageExampleCircular src={ giph }/> */}
                </Grid.Column>
                ))}
       {/*       </Grid>
            </Grid.Column>  */}    
          </Grid>
        </Container>
      </Container>
    );
  }
}

export default App;
