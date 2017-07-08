import React, {Component} from 'react';
import Login from "./Login/Login";
import Chat from "./Chat/Chat";
import $ from "jquery";
class App extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            loggedIn: false,
        }
    }

    login(name) {
        this.setState({username: name, loggedIn: true});
        localStorage.setItem("username", name);
    }

    logouts() {
        this.setState({username: '', loggedIn: false});
        localStorage.removeItem("username");
    }

    componentDidMount(){
        let username = localStorage.getItem("username");
        if(username){
            this.setState({username: username, loggedIn: true});
        }
    }

    render() {
        return (
            <div className="App">
                {
                    !this.state.loggedIn ?
                        <Heading />
                        : <div />
                }
                {
                    this.state.loggedIn ?
                        <Chat username={this.state.username} logouts={this.logouts.bind(this)}/>
                        : <Login
                        login={this.login.bind(this)}/>
                }
            </div>
        );
    }
}

class Heading extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div className="heading">
                <h1>
                    Chat App
                </h1>
            </div>
        )
    }
}

export default App;
