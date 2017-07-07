import React, {Component} from 'react';
import Login from "./Login/Login";
import Chat from "./Chat/Chat";

class App extends Component {
    constructor(){
        super();
        this.state={
            username: '',
            password: '',
            loggedIn: true,
        }
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
                        <Chat/>
                        :<Login/>
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
