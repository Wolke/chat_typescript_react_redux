import * as React from 'react';

export class SendIt extends React.Component<{socket:SocketIOClient.Socket} ,{}> {
    public textInput:HTMLInputElement;
    
    
    render (){
        return (
            <div>
             <input ref={(input) => this.textInput = input}/>
                <button onClick={(e)=>{
                    e.preventDefault();
                    this.props.socket.emit('speak', this.textInput.value );
                    this.textInput.value="";
                    this.textInput.focus();
                }} >
                    Send it! OK! !!
                </button>
        </div>)
    }
}