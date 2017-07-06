import React, {Component} from 'react';
import Chatbox from "./Chatbox";
import GetPartner from "./GetPartner";

export default class Chat extends Component{
    constructor(){
        super();
        this.state = {
            partner: '',
            chatData: [
                {
                    sender: 'User 1',
                    message: 'Sample Message Text Sample Message Text Sample Message Text Sample Message Text Sample Message Text Sample Message Text Sample Message Text Sample Message Text Sample Message Text Sample Message Text Sample Message Text Sample Message Text Sample Message Text Sample Message Text Sample Message Text Sample Message Text Sample Message Text Sample Message Text Sample Message Text Sample Message Text Sample Message Text Sample Message Text Sample Message Text Sample Message Text Sample Message Text Sample Message Text Sample Message Text Sample Message Text Sample Message Text '
                },
                {
                    sender: 'User 2',
                    message: 'Sample Message Text'
                },
                {
                    sender: 'User 1',
                    message: 'Sample Message Text'
                },
                {
                    sender: 'User 2',
                    message: 'Sample Message Text'
                },
                {
                    sender: 'User 1',
                    message: 'Sample Message Text'
                },
                {
                    sender: 'User 2',
                    message: 'Sample Message Text'
                },
                {
                    sender: 'User 1',
                    message: 'Sample Message Text'
                },
                {
                    sender: 'User 2',
                    message: 'Sample Message Text'
                },
                {
                    sender: 'User 1',
                    message: 'Sample Message Text'
                },
                {
                    sender: 'User 2',
                    message: 'Sample Message Text'
                },
                {
                    sender: 'User 1',
                    message: 'Sample Message Text'
                },
                {
                    sender: 'User 2',
                    message: 'Sample Message Text'
                },
                {
                    sender: 'User 1',
                    message: 'Sample Message Text'
                },
                {
                    sender: 'User 2',
                    message: 'Sample Message Text'
                },
            ],
        }
    }

    render(){
        return(
            <div className="chat">
                {
                    this.state.partner ?
                        <Chatbox partner={this.state.partner} breakup={this.breakup.bind(this)} chatData={this.state.chatData} sendMessage={this.sendMessage.bind(this)} />
                        :<GetPartner setPartner={this.setPartner.bind(this)} />
                }
            </div>
        )
    }

    setPartner(partner){
        this.setState({partner: partner});
        // write and call function here to get sync messages for user and that partner
    }
    breakup(){
        this.setState({partner: ''});
    }
    sendMessage(message){
        let chatData = this.state.chatData;
        chatData.push({
            sender: 'User 1',
            message: message,
        });

        this.setState({chatData: chatData});
    }
}
