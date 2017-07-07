import React, {Component} from 'react';
import $ from "jquery";
export default class SignUp extends Component{
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <div className="signUp">
                <form onSubmit={this.signup.bind(this)}>
                    <input type="text" ref="username" placeholder="Username"/>
                    <input type="email" ref="email" placeholder="Email"/>
                    <input type="password" ref="password" placeholder="Password"/>
                    <input type="Password" placeholder="Repeat Password"/>
                    <input type="submit" />
                </form>
            </div>
        )
    }
         signup(e){
        e.preventDefault();
            $.ajax({ 
  url: '../Backend/Controller/UserController.php',
  type: "POST",
          
          data: {function_name:'signup',username:this.refs.username.value,password:this.refs.password.value,email:this.refs.email.value},
          dataType: 'json',
           success: function(data) {
            if(data['code']==1){
console.log(data['code']);
                alert("User aldready exists");}
            else{
            console.log(data);
             this.props.setlogin(this.refs.username.value);}
}.bind(this),
            error:  function(data) {
        console.log(data);
}.bind(this),
        }); 
    
       
    }
}
