import React, { Component } from 'react';
import { ChatManager, TokenProvider } from '@pusher/chatkit-client';
import MessageContainer from '../container/MessageContainer';
import SendMessageContainer from '../container/SendMessageContainer';

class ChatScreen extends Component {

    componentDidMount() {
        const chatManager = new ChatManager({
            instanceLocator: 'v1:us1:8f5e48cf-aae6-458e-bc5c-3eb9ba5bb8d3',
            userId: this.props.usernameForm.username,
            tokenProvider: new TokenProvider({
                url: 'http://localhost:3001/api/authenticate',
            })
        })

        chatManager
            .connect()
            .then(currentUser => {
            this.props.currentUserChange(currentUser)
            return currentUser.subscribeToRoom({
                    roomId: '19391766',
                    messageLimit: 100,
                    hooks: {
                        onMessage: message => {
                            console.log(message)
                            this.props.messageChange(message)
                        }
                    }
                })
            })
            .then(currentRoom => this.props.currentRoomChange(currentRoom))
            .catch(error => {console.error(error)})
    }

    render() {
        return(
            <div>
                <h1>Hello</h1>
                <p>Welcome, {this.props.usernameForm.username}</p>     

                <MessageContainer />  
                <SendMessageContainer />     
            </div>
        )
    }
}

export default ChatScreen;