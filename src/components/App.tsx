import * as React from 'react';
import { Messages } from "./Messages";
import {SendIt} from "./SendIt";
import io = require('socket.io-client');

export class App extends React.Component<{},{socket :SocketIOClient.Socket ,messages:Array<string>}>{
    constructor(){
        super();
        this.state = {socket : io() ,messages:["abc"]};
    }
    componentDidMount (){
        this.state.socket.on("listen",(msg)=>{
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