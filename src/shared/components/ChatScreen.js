import React, { Component } from 'react';
import Chatkit, { ChatManager, TokenProvider } from '@pusher/chatkit-client';

class ChatScreen extends Component {

    componentDidMount() {
        const chatManager = new ChatManager({
            instanceLocator: 'v1:us1:8f5e48cf-aae6-458e-bc5c-3eb9ba5bb8d3',
            userId: this.props.usernameForm.username,
            tokenProvider: new TokenProvider({
                url: 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/8f5e48cf-aae6-458e-bc5c-3eb9ba5bb8d3/token',
                headers: {'Content-Type': 'application/json'}
            })
        })

        chatManager
            .connect()
            .then(currentUser =>{ console.log('currentUser', currentUser)})
            .catch(error => {console.error(error)})
    }

    render() {
        return(
            <div>
                <h1>Hello</h1>
                <p>Welcome, {this.props.usernameForm.username}</p>                
            </div>
        )
    }
}

export default ChatScreen;