import React, { Component } from 'react';

class MessageList extends Component {
    render() {
        console.log(this.props.messages.messages)
        return(
            <ul>
                {this.props.messages.messages.map((message, index) => (
                    <li key={index}>
                        <div>
                            <span>{message.senderId}</span>
                            <p>{message.text}</p>
                        </div>
                    </li>
                ))}
            </ul>
        )
    }
}

export default MessageList;