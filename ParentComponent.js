import React, {Component} from 'react';
import ChildComponent from './Childcomponent'
class ParentComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            parentname: 'hello'
        }
        this.greetParent = this.greetParent.bind(this)
    }
    
    greetParent(childname){
        alert(`Hello ${this.state.parentname} from ${childname}`)
    }
    render(){
        return(
            <div>
                <ChildComponent greetHandler = {this.greetParent}/>
            </div>
        )
    }
} 
export default ParentComponent;