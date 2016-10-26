"use strict";
const React = require('react');
class SendIt extends React.Component {
    render() {
        return (React.createElement("div", null, 
            React.createElement("input", {ref: (input) => this.textInput = input}), 
            React.createElement("button", {onClick: (e) => {
                e.preventDefault();
                this.props.socket.emit('speak', this.textInput.value);
                this.textInput.value = "";
                this.textInput.focus();
            }}, "Send it!!! momo !!")));
    }
}
exports.SendIt = SendIt;
//# sourceMappingURL=SendIt.js.map