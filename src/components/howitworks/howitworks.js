import React from 'react';
import Background from '../../images/bubbles.png';

const HowItWorks = props => (
  <section style={{backgroundImage: "url(" + Background + ")", backgroundSize: 'cover', width: '100%', height: '700px'}}>
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    <h1 className="center-align display-4 indigo-text text-darken-4">HOW IT WORKS</h1>
    <p className="center-align lead indigo-text text-darken-4">We calculate your match rate and let you know how to optimize your resume</p>
  </section>
);

export default HowItWorks;