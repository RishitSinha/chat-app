import React, {Component} from 'react';

export default class GetPartner extends Component{
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <div className="getPartner">
                <h1>Who would you like to chat with?</h1>
                <h2>Enter their username.</h2>
                <form onSubmit={this.savePartner.bind(this)}>
                    <input type="text" placeholder="Username" ref="username" />
                    <input type="submit" />
                </form>
            </div>
        )
    }

    savePartner(e){
        e.preventDefault();
        this.props.setPartner(this.refs.username.value);
    }
}
