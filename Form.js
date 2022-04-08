import React, {Component} from 'react';
class Form extends Component{
    constructor(props){
        super(props)
        this.state = {
            username: '',
            comments: '',
            topic: 'react'
        }
    }
    handleusernameChange = (event)=>{
        this.setState({
            username:event.target.value
        })
    }
    handleCommentsChange = (event) =>{
        this.setState({
            username: event.target.value
        })
    }
    handletopicchange = (event) =>{
        this.setState({
            topic:event.target.value
        })
    }
    handleSubmit = event => {
        alert(`${this.state.username}${this.state.comment}${this.state.topic}`)
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>username</label>
                    <input type='text' value={this.state.username} onChange={this.handleusernameChange} />
                </div>
                <div>
                    <label>Comments</label>
                    <textarea value={this.state.comments} onChange={this.handleCommentsChange}></textarea>
                </div>
                <div>
                    <label>topic</label>
                    <select value={this.state.topic} onChange={this.handletopicchange}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        )
    }

}
export default Form;