import React, { Component } from 'react';
import Header from './components/header/Header';
import HowItWorks from './components/howitworks/howitworks';
import MatchRate from './components/matchrate/matchrate';
import Ats from './components/ats/ats';
import Keyword from './components/keyword/keyword';

class App extends Component {
  render() {
    return (
      <main>
        <Header />
        <HowItWorks />
        <MatchRate />
        <Ats />
        <Keyword />
      </main>
      
    );
  }
}

export default App;
