import React, { Component } from 'react';
import Header from './components/Header';
import HowItWorks from './components/howitworks/howitworks';
import MatchRate from './components/matchrate/matchrate';
import Ats from './components/ats/ats';
import Keyword from './components/keyword/keyword';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <HowItWorks />
        <MatchRate />
        <Ats />
        <Keyword />
      </div>
      
    );
  }
}

export default App;
