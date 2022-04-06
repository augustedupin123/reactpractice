import React, {Component} from 'react';
class Message extends Component{
    constructor(){
        super()
        this.state = {
            message: 'welcome visitor',
        }
    }
    messagehandler(){
        this.setState({message: 'Thank you for subscribing'})
    }
    render(){
        return(
            <div>
                <h1>State Tutorial</h1>
                <h1>{this.state.message}</h1>
                <h1>Practice video</h1>
                <button onClick={()=>this.messagehandler()}>Subscribe</button>
            </div>
        )
    }
}
export default Message;
