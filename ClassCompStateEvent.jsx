import { Component } from "react";
export default class ClassCompStateEvent extends Component{
    constructor(){
        super()
        // creating an object
        // creating an array
        // creating a simple string
        // we have to create a state object
        this.state = {
            message: "",
            person:{},
            students:[]
        }
    
    }
    showMessage = ()=>{
        // let newState = {...this.state};
        // newState.message = 'hello';
        let newmessage = 'zsdifhsjdngdkjfhjh';
        this.setState({message:newmessage})
        
    }
    showPerson = ()=>{
        let newState = {...this.state};
        newState.person = {
            fname:"sanath",
                lname:"jayasuriya",
                email:"sanath.jayasuriya@gmail.com"
        }
        this.setState(newState);
    }
    showStudents = ()=>{
        let newState = {...this.state}
        newState.students = ['Raju', 'Jagannath samanta', 'Rahman', 'Deena', 'Sadik']
        this.setState(newState);
    }
    render() {
        let {fname, lname, email} = this.state.person;
        // let {person} = this.state;
        let {person, students} = this.state;
        return(
            <div>
                
                <h2>{this.state.message}</h2>
                <hr/>
        
                <button onClick={this.showMessage}>Show Message</button><br/>
                <hr />
                <button onClick={this.showPerson}>Show Person</button>
                <hr/>
                <button onClick={this.showStudents}>Show students</button>
                <hr>
                </hr>
                
                 
            </div>
        )
    }
}