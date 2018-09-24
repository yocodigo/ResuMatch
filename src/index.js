// import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//add debouce or threttle
// window.onload = () => {
//   window.addEventListener('scroll', function(ev){
//     console.log(ev)
//   })
// }
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
