//convert character to index
function charToIndex(char){
  if(isAlphabet(char)){
    return char.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0)
  }
  if(isNumber(char)){
    return char.charCodeAt(0) - '0'.charCodeAt(0) + 26
  }
  return (char === "'") ? 36 : 37
}

//check if character is number
function isNumber(char){
  return /[0-9]/.test(char)
}

//check if character is from alphabet
function isAlphabet(char){
  return /[a-zA-Z]/.test(char)
}

class Trie {
  constructor(){
    this.head = new Node()
    this.count = 0
  }
  populate(text){
    const len = text.length
    let i = 0, wordStarted = false, curr = null, idx;
    while(i < len){
      if(isAlphabet(text[i])){
        wordStarted = true
      }

      if(wordStarted){
        curr = this.head
        while(i < len && /[a-zA-Z0-9'-]/.test(text[i])){
          idx = charToIndex(text[i])
          if(!curr.children[idx]){
            curr.children[idx] = new Node
          }
          curr = curr.children[idx]
          i++
        }
        wordStarted = false
        curr.isWord = true
        this.count++
      }
      i++
    }
  }
  // we still look at the first character of the word twice
  compare(text){
    const len = text.length
    let count = 0, curr = null, i = 0, wordStarted = false, found, idx;
    while(i < len){
      if(isAlphabet(text[i])){
        wordStarted = true
        found = true
      }
      if(wordStarted){
        curr = this.head
        while(i < len && /[a-zA-Z0-9'-]/.test(text[i])){
          idx = charToIndex(text[i])
          //check if we have index in our trie
          if(!curr.children[idx]){
            found = false
            break
          }
          curr = curr.children[idx]
          i++ 
        }
        if(!found){
          //move curser to the end of the word + 1 or end of text
          while(i < len && /[a-zA-Z0-9'-]/.test(text[i])){
            i++
          } 
        } else {
          //increament count if we found the word
          count += curr.isWord 
        }
      }
      i++
    }
    return Math.round(count * 100 / this.count)
  }
  //search word in trie
  search(word){
    const len = word.length
    let curr = this.head, i = 0, idx;
    while(i < len){
      idx = charToIndex(word[i])
      if(!curr.children[idx]){
        return false
      }
      console.log(curr)
      curr = curr.children[idx]
      i++
    }
    return curr.isWord
  }
}

class Node{
  constructor(){
    this.children = Array(38).fill(null)
    this.isWord = false
  }
}

function compare(str1){
  const trie = new Trie()
  trie.populate(str1)
  return function(text){
    return trie.compare(text)
  }
}

const text = "Frontend Engineers are an essential part of Airbnb's Product Team.  Working closely with designers, we implement the user interface of our web app.  We build libraries and abstractions to make our lives easier, such as O2, our front-end toolkit.  We make the most of modern tools like React, ES6, and SASS, and we ensure our UIs work well on all screen sizes.  Some of us specialize in CSS, some in front-end infrastructure, but all of us are JavaScript pros and full-stack engineers."
const text2 = 'We build libraries and abstractions to make our lives easier, such as O2, our front-end toolkit.  We make the most of modern tools like React, ES6, and SASS, and we ensure our UIs work well on all screen sizes.  Some of us specialize in CSS, some in front-end infrastructure, but all of us are JavaScript pros and full-stack engineers.'
const word = "es6"
console.log(compare(text)(text2))
