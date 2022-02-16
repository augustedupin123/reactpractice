import React from 'react';
function GreetComponent(props){
    console.log(props)
    return <h1>Hello, {props.name}</h1>
}
function App(){
    return(
        <GreetComponent name="JoWilfrid" />
    )
}
export default GreetComponent;