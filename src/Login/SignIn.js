import React, {Component} from 'react';

export default class SignIn extends Component{
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <div className="signIn">
                <form>
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}
