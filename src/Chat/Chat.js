import React, {Component} from 'react';
import Chatbox from "./Chatbox";
import GetPartner from "./GetPartner";
import $ from "jquery";
export default class Chat extends Component {
    constructor() {
        super();
        this.state = {
            partner: '',
            chatData: [],
        }
    }


    render() {
        return (
            <div className="chat">
                {
                    this.state.partner ?
                        <Chatbox partner={this.state.partner} breakup={this.breakup.bind(this)}
                                 logout={this.logout.bind(this)} username={this.props.username}
                                 chatData={this.state.chatData} sendMessage={this.sendMessage.bind(this)}/>
                        : <GetPartner setPartner={this.setPartner.bind(this)} username={this.props.username}/>
                }
            </div>
        )
    }

    setPartner(partner) {
        this.setState({partner: partner});
        // write and call function here to get sync messages for user and that partner
    }

    breakup() {
        this.setState({partner: ''});
    }

    logout() {

        this.props.logouts();
    }

    sendMessage(message) {
        let chatData = this.state.chatData;
        chatData.push({
            sender: 'User 1',
            message: message,
        });
        $.ajax({
            url: '../Backend/Controller/ChatController.php',
            type: "POST",

            data: {function_name: 'sendMsg', msg: message, reciever: this.state.partner},
            dataType: 'json',
            success: function (data) {

            }.bind(this),
            error: function (data) {
            }.bind(this),
        });

        this.setState({chatData: chatData});
    }
}
