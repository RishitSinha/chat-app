import React, {Component} from 'react';
import $ from "jquery";
export default class SignIn extends Component{
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <div className="signIn">
                <form onSubmit={this.login.bind(this)}>
                    <input type="text" ref="username" placeholder="Username" />
                    <input type="password" ref="password" placeholder="Password" />
                    <input type="submit" />
                </form>
            </div>
        )
    }
     login(e){
        e.preventDefault();
            $.ajax({ 
  url: '../Backend/Controller/UserController.php',
  type: "POST",
          
          data: {function_name:'logins',username:this.refs.username.value,password:this.refs.password.value},
          dataType: 'json',
           success: function(data) {
            console.log(data);
             this.props.setlogin(this.refs.username.value);
}.bind(this),
            error:  function(data) {
        console.log(data);
}.bind(this),
        }); 
    
       
    }
}
