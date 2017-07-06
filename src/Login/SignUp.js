import React, {Component} from 'react';

export default class SignUp extends Component{
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <div className="signUp">
                <form>
                    <input type="text" placeholder="Username"/>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    <input type="Password" placeholder="Repeat Password"/>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}
