import React, {Component} from 'react';
import Login from "./Login/Login";
import Chat from "./Chat/Chat";
import $ from "jquery";
class App extends Component {
    constructor(){
        super();
        this.state={
            username: '',
            password: '',
            loggedIn: false,
        }
    }
    login(name){

         this.setState({username:name,loggedIn:true});
         console.log(this.state.username);
    }
    render() {
        return (
            <div className="App">
                {
                    !this.state.loggedIn ?
                        <Heading />
                        :<div />
                }
                {
                    this.state.loggedIn ?
                        <Chat username={this.state.username}/>
                        :<Login
                         login={this.login.bind(this)}/>
                }
            </div>
        );
    }
}

class Heading extends Component{
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <div className="heading">
                <h1>
                    Chat App
                </h1>
            </div>
        )
    }
}

export default App;
