import React from 'react';
import Container from '../button/container';
import Title from './title';
import Background from '../../images/bubbles.png';

const HowItWorks = props => (
  <div style={{backgroundImage: "url(" + Background + ")", backgroundSize: 'cover', width: '100%', height: '750px'}}>
     <Title className='row'/> 
     <Container className='row'/>
  </div>
);

export default HowItWorks;