import React from 'react';
import './index.css'

function compare(str1){
  const obj = str1.split(' ').reduce((map, item) => {
    if(map[item]){
      map[item] = true
    }
    return map
  }, {})
  return function(str2){
    return str2.split(' ').reduce((acc, item) => {
      if(obj[item]){
        acc++
      }
      return acc
    }, 0) * 100 / str1.length
  }
}

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
    document.querySelector('.result').textContent = this.compareTo(this.text)
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