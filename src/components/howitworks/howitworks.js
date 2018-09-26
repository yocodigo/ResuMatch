import React from 'react';
import './index.css'

class HowItWorks extends React.Component {
  constructor(props){
    super(props)
    this.fileUpload = null
    this.requirements = null

    this.onChange = this.onChange.bind(this)
    this.onFile = this.onFile.bind(this)
    this.onClick = this.onClick.bind(this)
  }

  onChange(e){
    this.requirements = e.target.value
  }

  onFile(e){
    this.fileUpload = e.target.files
  }

  onClick(){
    document.querySelector('textarea').textContent = ''
    document.querySelector('.result').textContent = 'Hello'
  }

  render(){
    return (
      <section>
        <h1>HOW IT WORKS</h1>
        <p>We calculate your match rate and let you know how to optimize your resume</p> 
        <form className="matching">
          <textarea onChange={this.onChange}></textarea>
          <div className="drag_and_drop"> 
            <input type="file" onChange={this.onFile}/>
          </div>
        </form>
        <button onClick={this.onClick}><h3>Submit</h3></button>
        <span className="result"></span>
      </section>
    )
  }
}

// const HowItWorks = props => {

  
// }

export default HowItWorks;