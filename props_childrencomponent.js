import React from 'react';
function GreetComponent(props){
    return <div>
        <h1>Hello, {props.name}</h1>
        {props.children}
    </div>
}
function newApp(){
    return(
        <GreetComponent name="carter" children = "777">
            <p>DEF</p>
        </GreetComponent>
    )
}
export default newApp;
// anything inside the component means children are passed as children props.