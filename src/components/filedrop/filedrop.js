import React from 'react';
import Dropzone from 'react-dropzone';
import Button from '../button/button';

// const imageMaxSize = 100000000 // bytes
const FileDrop = () => {

  let fileReader;
  let parsedWords = [];

  const handleFileRead = (e) => {
    // const content = fileReader.result;
    const content = e.target.result;
    // const content = e.target;

    parsedWords = content.split(' ');
    console.log(parsedWords);
  };

  const handleOnDrop = (acceptedFiles, rejectedFiles) => {
    // console.log(acceptedFiles);
      fileReader = new FileReader();
      fileReader.onload = handleFileRead;
      
      // fileReader.readAsText(acceptedFiles);
      fileReader.readAsText(acceptedFiles[0]);
      // console.log('rejected files: ', rejectedFiles);
    };

  // render() {
    return (
      <section className='row'>
        <div>
          <Dropzone className='col offset-s1' style={{borderStyle:"solid", borderWidth: "1px", background: "#F0F0F0", height:"350px", width:"600px", marginBottom:"20px", padding: '150px'}} onDrop={e => handleOnDrop(e)} multiple={false} accept='.pdf, .odt, .txt, .doc, .docx'>Drop your file here, or click submit to select file to upload</Dropzone>
        </div>
        {/* <aside className='col s2'></aside> */}
        <aside className='col offset-s5' style={{padding:"0px"}}>
        <Button></Button>
        {/* <aside className='col s2'></aside> */}
        </aside>
      </section>
    )
  }
// }

export default FileDrop;