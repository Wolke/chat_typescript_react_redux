import * as React from 'react';
// import * as Messages from "./Messages";
import { Messages } from "./Messages";
import {SendIt} from "./SendIt";
import io = require('socket.io-client');

export class App extends React.Component<{},{socket :SocketIOClient.Socket ,messages:Array<string>}>{
    constructor(){
        super();
        this.state = {socket : io() ,messages:["abc"]};
    }

    componentDidMount (){
        // this.socket = io();
        // this.messages = [];

        this.state.socket.on("listen",(msg)=>{
            // this.messages.push(msg);
            var ms = this.state.messages;
            ms.push(msg);
            this.setState({socket:this.state.socket,messages:ms})
        })
    }
    render(){
        return (
            <div>
                <SendIt socket={this.state.socket} />
                <Messages messgaes={this.state.messages} />
            </div>
        )
    }
}