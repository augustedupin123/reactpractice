import React, {useState} from 'react';
function App3(){
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    let message = '';
    if(name === 'admin' && password === 'admin'){
        message = 'Hello admin';
    }else{
        message = 'who are you';
    }
    return (
        <div>
            <span>{message}</span>
            <input type="text" value = {name} onChange = {updateTextField} />
            <input type = "password" value = {password} onChange={updatePasswordField} />
            <button onClick={submitForm}>Submit Form</button>
        </div>
    )
    function submitForm(){
        console.log(name, password);
    }
    function updateTextField(event){
        setPassword(event.target.value);

    }
    function updatePasswordField(event){
        setName(event.target.value);

    }
}
export default App3;