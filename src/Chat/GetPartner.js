import React, {Component} from 'react';
import $ from "jquery";
export default class GetPartner extends Component{
    constructor(){
        super();
        this.state = {      
                 onlinePeeps: [{
    "id": "59033b83daadcb377c731675",
    "name": "Mathews Barlow",
    "email": 1,
    "online": "This is a demo comment",
    "image": "This is a demo comment",
    
  },{
    "id": "59",
    "name": "Maknijnjknin",
    "email": 1,
    "online": "This is a demo comment",
    "image": "This is a demo comment",
    
  }],
        

        }
    }
    componentDidMount(){

    $.ajax({ 
  url: '../Backend/Controller/ChatController.php',
  type: "POST",
          
          data: {function_name:'userlist'},
          dataType: 'json',
           success: function(data) {
                this.state = {
      
       onlinePeeps: [data]
    }
        this.setState({onlinePeeps:data});
     console.log(this.state.onlinePeeps);
 
}.bind(this),
            error:  function(data) {
        console.log(data);
}.bind(this),
        }); 
    
    
}

    render(){console.log(this.props.username);
        return(
            <div className="getPartner">
                <h1>Who would you like to chat with?{this.props.username}</h1>
                <h2>Enter their username.</h2>
                <form onSubmit={this.savePartner.bind(this)}>
                    <input type="text" placeholder="Username" ref="username" />
                    <input type="submit" value="Start Chatting!" />
                </form>

                     <ul>
      {
            this.state.onlinePeeps.map(onlinePeeps => 
              <button key={onlinePeeps.id}  refs="username" value={onlinePeeps.name} onClick={() => this.savePartner2(onlinePeeps.name)}>{onlinePeeps.name}</button>
            )
          }
    </ul>
            </div>
        )
    }
  savePartner2(name){
     
        console.log(name);
        this.props.setPartner(name);
    }
    savePartner(e){
        e.preventDefault();
        this.props.setPartner(this.refs.username.value);
    }
}
