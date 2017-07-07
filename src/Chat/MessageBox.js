import React, {Component} from 'react';

export default class MessageBox extends Component{
    constructor(){
        super();
        this.state = {
            partner: 'User 2',
        }
    }

    render(){
        return(
            <div className="messageContainer">
                {
                    this.props.chatData.map(function(message){
                        return <Message sender={message.sender} message={message.message} partner={this.state.partner} />;
                    }.bind(this))
                }
            </div>
        )
    }
}

class Message extends Component{
    constructor(){
        super();
        this.state = {
            sent: false,
        }
    }

    componentWillMount(){
        if(this.props.sender != this.props.partner){
            this.setState({sent: true})
        }
    }

    render(){
        return(
            <div>
                {
                    this.state.sent ?
                        <div className="message">
                            <div className="messageBox">
                                {this.props.message}
                            </div>
                            <div className="icon">
                                {(((this.props.sender.match(/\b\w/g) || []).shift() || '') + ((this.props.sender.match(/\b\w/g) || []).pop() || '')).toUpperCase()}
                            </div>
                        </div>
                        :<div className="message received">
                        <div className="icon">
                            {(((this.props.sender.match(/\b\w/g) || []).shift() || '') + ((this.props.sender.match(/\b\w/g) || []).pop() || '')).toUpperCase()}
                        </div>
                        <div className="messageBox">
                            {this.props.message}
                        </div>
                    </div>
                }
            </div>
        )
    }
}