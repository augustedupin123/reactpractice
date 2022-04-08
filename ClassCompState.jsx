import { Component } from "react";
export default class ClassCompState extends Component{
    constructor(){
        super()
        // creating an object
        // creating an array
        // creating a simple string
        // we have to create a state object
        this.state = {
            message: "welcome to class component",
            person:{
                fname:"sanath",
                lname:"jayasuriya",
                email:"sanath.jayasuriya@gmail.com"
            },
            students:['Raju', 'Jagannath samanta', 'Rahman', 'Deena', 'Sadik']
        }
    
    }
    render() {
        let {fname, lname, email} = this.state.person;
        // let {person} = this.state;
        let {person, students} = this.state;
        return(
            <div>
                <h1>{this.state.message}</h1>
                <h2>hello from ClassCompState</h2>
                <ul>
                    {/* <li>{this.state.person.fname}</li>
                    <li>{this.state.person.lname}</li>
                    <li>{this.state.person.email}</li> */}
                    <li>{fname}</li>
                    <li>{lname}</li>
                    <li>{email}</li>
                    {Object.values(person).map((val,i)=>{
                        console.log(i)
                        return<li key={i}>{val}</li>
                    }) 
                
                    }
                </ul>
                <ul>
                    {students.map((std,i)=>{
                        return <li key={i}>{std}</li>
                    })}
                </ul>
            </div>
        )
    }
}