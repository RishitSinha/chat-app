import React, {Component} from 'react';
import $ from "jquery";
export default class GetPartner extends Component {
    constructor() {
        super();
        this.state = {
            onlinePeeps: [],
        }
    }

    componentDidMount() {

        $.ajax({
            url: '../Backend/Controller/ChatController.php',
            type: "POST",

            data: {function_name: 'userlist'},
            dataType: 'json',
            success: function (data) {
                this.state = {

                    onlinePeeps: [data]
                }
                this.setState({onlinePeeps: data});

            }.bind(this),
            error: function (data) {
            }.bind(this),
        });


    }

    render() {
        return (
            <div className="getPartner">
                <h1>Who would you like to chat with, {this.props.username}?</h1>
                <h2>Enter their username.</h2>
                <form onSubmit={this.savePartner.bind(this)}>
                    <input type="text" placeholder="Username" ref="username"/>
                    <div className="otherUsers">
                        <h2> or select from registered users:</h2>
                        <div className="waitingSingles">
                            {
                                this.state.onlinePeeps.map(onlinePeeps => this.props.username != onlinePeeps.name ?
                                    <button className="singles" key={onlinePeeps.id} refs="username"
                                            value={onlinePeeps.name}
                                            onClick={() => this.savePartner2(onlinePeeps.name)}>{onlinePeeps.name}</button>
                                    : <div></div>)
                            }
                        </div>

                    </div>
                    <input type="submit" value="Start Chatting!"/>
                </form>


            </div>
        )
    }

    savePartner2(name) {
        this.props.setPartner(name);
    }

    savePartner(e) {
        e.preventDefault();
        this.props.setPartner(this.refs.username.value);
    }
}
