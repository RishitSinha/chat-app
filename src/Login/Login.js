import React, {Component} from 'react';
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default class Login extends Component{
    constructor(){
        super();
        this.state = {
            registered: true,
        }
    }

    render(){
        return(
            <div className="login">
                <div className="loginFormSwitcher">
                    <button onClick={() => this.setState({registered: true})}>SignIn</button>
                    <button onClick={() => this.setState({registered: false})}>SignUp</button>
                </div>
                <div className="loginFormWrapper">
                    {
                        this.state.registered ?
                            <SignIn/>
                            :<SignUp/>
                    }
                </div>

            </div>
        )
    }
}

