import React, {Component} from 'react';
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            registered: true,
        }
    }

    render() {
        return (
            <div className="login">
                <div className="loginFormSwitcher">
                    <button onClick={() => this.setState({registered: true}) }
                            style={this.state.registered ? {background: 'rgba(0,0,0,0.5)'} : {}}>SignIn
                    </button>
                    <button onClick={() => this.setState({registered: false})}
                            style={this.state.registered ? {} : {background: 'rgba(0,0,0,0.5)'}}>SignUp
                    </button>
                </div>
                <div className="loginFormWrapper">
                    {
                        this.state.registered ?
                            <SignIn
                                setlogin={this.setlogin.bind(this)}/>
                            : <SignUp
                            setlogin={this.setlogin.bind(this)}/>
                    }
                </div>
            </div>
        )
    }

    setlogin(name) {
        this.props.login(name);
    }
}

