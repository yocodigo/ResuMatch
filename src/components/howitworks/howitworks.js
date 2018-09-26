import React from 'react';
import './index.css'
import compare from '../../compare'

class HowItWorks extends React.Component {
  constructor(props){
    super(props)
    this.compareTo = null
    this.text = null

    this.onChange = this.onChange.bind(this)
    this.onFile = this.onFile.bind(this)
    this.onClick = this.onClick.bind(this)
  }

  onChange(e){
    this.compareTo = compare(e.target.value)
  }

  onFile(evt){
    const reader = new FileReader()
    reader.onload = e => {
      this.text = e.target.result
    }
    reader.readAsText(evt.target.files[0])
  }

  onClick(){
    document.querySelector('.result').textContent = this.compareTo(this.text) + "%"
  }

  render(){
    return (
      <section>
        <h1>HOW IT WORKS</h1>
        <p>We calculate your match rate and let you know how to optimize your resume</p> 
        <form className="matching">
          <textarea 
            placeholder="please copy and paste your job requirements here" 
            onChange={this.onChange}>
          </textarea>
          <div className="drag_and_drop"> 
            <input type="file" onChange={this.onFile}/>
          </div>
        </form>
        <button onClick={this.onClick}><h3>Compare</h3></button>
        <span className="result"></span>
      </section>
    )
  }
}

export default HowItWorks;
