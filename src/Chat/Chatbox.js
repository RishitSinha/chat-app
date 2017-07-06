import React, {Component} from 'react';
import MessageBox from "./MessageBox";

export default class Chatbox extends Component{
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <div className="chatbox">
                <div className="chatHeader">
                    <h1>{this.props.partner}</h1>
                    <h2 onClick={this.props.breakup}> Chat with Someone else?</h2>
                </div>
                <MessageBox chatData={this.props.chatData} />
                <div className="messageInput">
                    <form onSubmit={this.sendMessage.bind(this)}>
                        <textarea placeholder="Message..." ref="message"/>
                        <input type="submit" />
                    </form>
                </div>
            </div>
        )
    }

    sendMessage(e){
        e.preventDefault();
        this.props.sendMessage(this.refs.message.value);
        this.refs.message.value = '';
    }
}
