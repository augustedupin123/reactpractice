import React, { useState } from 'react';

function App4(){
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
     
    return (
        <div>
            <input type="text" value={name} onChange={updateTextField} />
            <input type="password" value={password} onChange={updatepasswordField} />
            <button onClick = {submitForm}>Submit Form</button>
        </div>
    )
    if(name === 'admin'){
        console.log('bhapp');
    }
    function submitForm(){
        console.log(name, password);
        alert('afridi');
        if(name=='admin'){
            console.log('bhapp');
        }
    }
    function updateTextField(event){
        setName(event.target.value);
    }
    function updatepasswordField(event){
        setPassword(event.target.password);
    }
    
}
export default App4;