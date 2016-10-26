"use strict";
const React = require('react');
class Message extends React.Component {
    render() {
        return (React.createElement("div", {key: this.props.msg}, this.props.msg));
    }
}
class Messages extends React.Component {
    render() {
        return (React.createElement("div", null, (() => {
            return (React.createElement("div", null, 
                React.createElement("h1", null, "meaages"), 
                this.props.messgaes.map((msg) => {
                    console.log(msg);
                    return React.createElement(Message, {msg: msg});
                })));
        })()));
    }
}
exports.Messages = Messages;
//# sourceMappingURL=Messages.js.map