import React, {Component} from 'react';
import $ from "jquery";
export default class MessageBox extends Component{
    constructor(){
        super();
        this.state = {
            partner: 'User 2',
            refresh:'1',
               chatData: [
                {
                    sender: 'User 1',
                    message: 'Sample Message Text '
                },
                {
                    sender: 'User 2',
                    message: 'Sample Message Text'
                },
               
            ],
        }
    }
componentDidMount(){


    $.ajax({ 
  url: '../Backend/Controller/ChatController.php',
  type: "POST",
          
          data: {function_name:'getMsg',partner:this.props.partner},
          dataType: 'json',
           success: function(data) {
             
        this.setState({chatData:data});
     console.log(data);
 
}.bind(this),
            error:  function(data) {
        console.log(data);
}.bind(this),
        }); 
    
    

    this.setState({partner:this.props.partner,refresh:this.props.refresh});
}
componentWillReceiveProps(){    $.ajax({ 
  url: '../Backend/Controller/ChatController.php',
  type: "POST",
          
          data: {function_name:'getMsg',partner:this.props.partner},
          dataType: 'json',
           success: function(data) {
             
        this.setState({chatData:data});
     console.log(data);
 
}.bind(this),
            error:  function(data) {
        console.log(data);
}.bind(this),
        }); 
    
    

    this.setState({partner:this.props.partner,refresh:this.props.refresh});}
    render(){console.log(this.state.refresh);console.log(this.state.partner);
        return(
            <div className="messageContainer">
                {
                    this.state.chatData.map(function(message){if ((message.sender==this.state.partner&&message.reciever==this.props.username)||(message.sender==this.props.username&&message.reciever==this.state.partner)){
                        return <Message sender={message.sender} message={message.message} partner={this.state.partner} />;
                    }
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