import React, { Component } from 'react';
import { ChatManager, TokenProvider } from '@pusher/chatkit-client';
import MessageContainer from '../container/MessageContainer';
import SendMessageContainer from '../container/SendMessageContainer';
import TypingContainer from '../container/TypingContainer';

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
                            this.props.messageChange(message) //sends message data back to function in container
                        },
                        onUserStartedTyping: user => {this.props.usersTyping(user.name)},
                        onUserStoppedTyping: user => {this.props.usersStoppedTyping(user.name)}
                    }
                })
            })
            .then(currentRoom => this.props.currentRoomChange(currentRoom))
            .catch(error => {console.error(error)})
    }

    render() {
        return(
            <div style={{
                display: 'flex',
                height: '100vh'
            }}>
                {/* <p>Welcome, {this.props.usernameForm.username}</p>      */}
                <div style={{
                    width: '30%',
                    background: 'tomato'
                }}>
                    <h2>List of users online</h2>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <div style={{
                        flex: 1
                    }}>
                        <MessageContainer />
                    </div>
                    <TypingContainer />
                    <SendMessageContainer /> 
                </div>   
            </div>
        )
    }
}

export default ChatScreen;