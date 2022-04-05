import React from 'react';
import ReactDOM from 'react-dom';


import Greet from './Greet';
import Greet1 from './Greet1';
import Welcome from './welcome';
import Hello from './Hello1';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Greet />
    <Greet1 name="harry" superhero = 'ironMan'>
      <p>This is sidekick prop</p>
    </Greet1>
    <Greet1 name="meghan" superhero = 'hee-man'>
      <button>Action</button>
    </Greet1>
    <Greet1 name="andrew"superhero = 'spiderman'/>
    
    <Welcome name="andrew"superhero = 'spiderman'/>
    <Welcome name="harry" superhero = 'ironMan'/>
    <Welcome name="meghan" superhero = 'hee-man'/>
    <Hello />
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
