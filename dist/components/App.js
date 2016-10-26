"use strict";
const React = require('react');
const Messages_1 = require("./Messages");
const SendIt_1 = require("./SendIt");
const io = require('socket.io-client');
class App extends React.Component {
    constructor() {
        super();
        this.state = { socket: io(), messages: ["abc"] };
    }
    componentDidMount() {
        this.state.socket.on("listen", (msg) => {
            var ms = this.state.messages;
            ms.push(msg);
            this.setState({ socket: this.state.socket, messages: ms });
        });
    }
    render() {
        return (React.createElement("div", null, 
            React.createElement(SendIt_1.SendIt, {socket: this.state.socket}), 
            React.createElement(Messages_1.Messages, {messgaes: this.state.messages})));
    }
}
exports.App = App;
//# sourceMappingURL=App.js.map