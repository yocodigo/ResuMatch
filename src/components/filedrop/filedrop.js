import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import Button from '../button/button';

const imageMaxSize = 100000000 // bytes
class FileDrop extends Component {

  handleOnDrop = (files, rejectedFiles) => {
      console.log(files);
      console.log('rectect files: ', rejectedFiles);
    }

  render() {
    return (
      <section className='row'>
        <div>
          <Dropzone className='col offset-s1' style={{borderStyle:"solid", height:"350px", width:"600px", marginBottom:"20px", padding: '150px'}} onDrop={this.handleOnDrop} multiple={false} maxSize={imageMaxSize} accept='.pdf, .odt, .txt, .doc, .docx'>Drop your file here, or click submit to select file to upload</Dropzone>
        </div>
        {/* <aside className='col s2'></aside> */}
        <aside className='col offset-s5' style={{padding:"0px"}}>
        <Button></Button>
        {/* <aside className='col s2'></aside> */}
        </aside>
      </section>
    )
  }
}

export default FileDrop;