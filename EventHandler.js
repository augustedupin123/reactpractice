import React, {Component} from "react";
class Event extends Component{
    constructor(props){
        super(props)
        this.state = {
            message: 'Hello'
        }
        this.clickhandler = this.clickhandler.bind(this)
    }
    // clickhandler(){
    //     this.setState({
    //         message: "Goodbye"
    //     })
    // }
    clickhandler = ()=>{
        this.setState({
            message: 'Goodbye!'
        })
    }
    render(){
        return(
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickhandler.bind(this)}>Click</button> */}
                {/* <button onClick={()=>this.clickhandler()}>Click</button> */}
                <button onClick={this.clickhandler}>Click</button>
            </div>
        )
    }
}
export default EventBind;
// this keyword is undefined in event handlers