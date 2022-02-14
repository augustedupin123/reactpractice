import React from 'react';
import {useState} from 'react';

function App2(){
    const [counter, setCounter] = useState(0);
// useState 0 is the default value of the counter variable. setcounter function has to have the logic. For updating 
// state of the webpage we have to use state always.

    function buttonclick(){
        setCounter(counter + 1)
    }
    return(
        <div>
            <button onClick={buttonclick}>Button</button>
            <h1>{counter}</h1>
        </div>
    )
}
export default App2;