import React from 'react';
function App1(){
    function buttonwasClicked(event){
        alert('i was clicked')
        console.log(event.target)
    }
    return (
        <div>
            <button onClick={buttonwasClicked}>Button</button>
            <h1>Hello world</h1>
        </div>
    )
}
export default App1;