import React from 'react';
import {add,divi,sub,mult} from './calc';
function App(){
  return(
    <>
      <ul>
      <li>The sum of the two nos. is{add(40,4)}</li>
      <li>The division of the two nos. is{divi(40,4)}</li>
      <li>The subtraction of the two nos. is{sub(40,4)}</li>
      <li>The multiplication of the two nos. is {mult(40,4)}</li>
    </ul>
    </>
  );
}
export default App;
