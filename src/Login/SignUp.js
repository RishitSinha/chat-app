import React, {Component} from 'react';
import $ from "jquery";
export default class SignUp extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div className="signUp">
                <form onSubmit={this.signup.bind(this)}>
                    <input type="text" ref="username" placeholder="Username"/>
                    <input type="email" ref="email" placeholder="Email"/>
                    <input type="password" ref="password" placeholder="Password"/>
                    <input type="password" ref="passwordconf" placeholder="Repeat Password"/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }

    signup(e) {

        e.preventDefault();

        if( !this.refs.username.value && !this.refs.password.value && !this.refs.email.value && !this.refs.passwordconf.value){
            alert('Please complete the form!');
            return;
        }

        if( this.refs.password.value !== this.refs.passwordconf.value ){
            alert('Passwords do not match!');
            return;
        }

        let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!this.refs.email.value.match(mailformat)){
            alert('Invalid Email!');
            return;
        }
        $.ajax({
            url: '../Backend/Controller/UserController.php',
            type: "POST",

            data: {
                function_name: 'signup',
                username: this.refs.username.value,
                password: this.refs.password.value,
                email: this.refs.email.value
            },
            dataType: 'json',
            success: function (data) {
                if (data['code'] == 1) {
                    alert("User aldready exists");
                }
                else {
                    this.props.setlogin(this.refs.username.value);
                }
            }.bind(this),
            error: function (data) {
            }.bind(this),
        });


    }
}
