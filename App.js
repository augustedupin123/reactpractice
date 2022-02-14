 import React from 'react';
 const arrypractice = [1,2,3,4,5,6];
//  inside the parantheses {} we can put javascript null , numbers (3+2), strings, arrays. 

//  class MyComponent extends React.component{

//  }
function IAmH1(){
  return (
    <div>
      <h1>hello world</h1>
      <h2>wow all this is so cool {["a1", "a2"]}</h2>
      <h3>{arrypractice}</h3>
      <h4>{arrypractice.map(val => val ** 2)}</h4>
      
      <h4>{arrypractice.map(val => <div>{val ** 2}</div>)}</h4>
      <h4>{arrypractice.map(val => <div>val ** 2</div>)}</h4>
    </div>
  )
    
    
    
  
}
 function App(){
   return (
     <div><IAmH1 /></div>
     
     
     
   )
 }
//  export default App;
