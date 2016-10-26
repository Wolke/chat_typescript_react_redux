import * as React from 'react';

class Message extends React.Component<{msg:string},any>{
    render(){
        return(
            <div key={this.props.msg}>
                 {this.props.msg}
            </div>
        )
    }
}

export class Messages extends React.Component<{messgaes:Array<string>},any>{
   
    render(){
        return (
            <div>
                             {
                (()=>{
                    return(
                        <div>
                        <h1>meaages</h1>
                        {
                             this.props.messgaes.map((msg)=>{
                                console.log(msg);
                                return <Message msg={msg} />
                            })
                        }

                        </div>
                    )
                   
                })()
            }
            
            </div>
        
        )
       
        
    }
}