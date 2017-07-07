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
                    <div className="icon change" title="Chat with Someone Else?" onClick={this.props.breakup}></div>
                    <div className="icon logout" title="Logout"></div>
                </div>
                <MessageBox chatData={this.props.chatData} />
                <div className="messageInput">
                    <form onSubmit={this.sendMessage.bind(this)}>
                        <textarea placeholder="Message..." ref="message" />
                        <input type="submit" value="Send" />
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
