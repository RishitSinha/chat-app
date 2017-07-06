import React, {Component} from 'react';
import Login from "./Login/Login";
import Chat from "./Chat/Chat";

class App extends Component {
    constructor(){
        super();
        this.state={
            username: '',
            password: '',
            loggedIn: false,
        }
    }
    render() {
        return (
            <div className="App">
                <Heading />
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

            </div>
        )
    }
}

export default App;
