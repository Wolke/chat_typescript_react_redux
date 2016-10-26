"use strict";
const React = require('react');
// import * as Messages from "./Messages";
// import { Messages } from "./Messages";
// import {SendIt} from "./SendIt";
const io = require('socket.io-client');
class App extends React.Component {
    constructor() {
        super();
        this.state = { messages: ["abc"] };
    }
    componentDidMount() {
        this.socket = io();
        // this.messages = [];
        this.socket.on("listen", (msg) => {
            // this.messages.push(msg);
            var ms = this.state.messages;
            ms.push(msg);
            this.setState({ messages: ms });
        });
    }
    render() {
        return (React.createElement("div", null, 
            React.createElement("input", {ref: (input) => this.textInput = input}), 
            React.createElement("button", {onClick: (e) => {
                e.preventDefault();
                this.socket.emit('speak', this.textInput.value);
                this.textInput.value = "";
                this.textInput.focus();
            }}, "Send it!!!"), 
            (() => {
                return (React.createElement("div", null, 
                    React.createElement("h1", null, "meaages"), 
                    this.state.messages.map((msg) => {
                        console.log(msg);
                        return (React.createElement("div", null, msg));
                    })));
            })()));
    }
}
exports.App = App;
//# sourceMappingURL=App.js.map