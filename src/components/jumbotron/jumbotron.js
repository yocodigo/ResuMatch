import React from 'react';
import Upload from '../form/upload';

const Jumbotron = props => (
  <div className="jumbotron">
    <h1 className="display-4">BoardHacker</h1>
    <p className="lead">This is an app to transfter whiteboard photos to Code.</p>
    <br/>
    <button  type="button" className="btn btn-primary">
      <Upload />
    </button>
  </div>
);

export default Jumbotron;
