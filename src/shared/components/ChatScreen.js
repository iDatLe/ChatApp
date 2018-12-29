import React, { Component } from 'react';
import { ChatManager, TokenProvider } from '@pusher/chatkit-client';
import MessageContainer from '../container/MessageContainer';
import SendMessageContainer from '../container/SendMessageContainer';
import TypingContainer from '../container/TypingContainer';
import OnlineContainer from '../container/OnlineContainer';

class ChatScreen extends Component {

    componentDidMount() {
        const chatManager = new ChatManager({
            instanceLocator: 'v1:us1:8f5e48cf-aae6-458e-bc5c-3eb9ba5bb8d3',
            userId: this.props.usernameForm.username,
            tokenProvider: new TokenProvider({
                url: 'http://localhost:8080/api/authenticate',
            })
        })

        chatManager
            .connect()
            .then(currentUser => {
            this.props.currentUserChange(currentUser)
            return currentUser.subscribeToRoom({
                    roomId: '19392022',
                    messageLimit: 100,
                    hooks: {
                        onMessage: message => {
                            this.props.messageChange(message) //sends message data back to function in container
                        },
                        onUserStartedTyping: user => {this.props.usersTyping(user.name)},
                        onUserStoppedTyping: user => {this.props.usersStoppedTyping(user.name)},
                        onPresenceChanged: (state, user) => {this.props.presenceChanged(state, user)},
                        onUserJoined: user => {} 
                    }
                })
            })
            .then(currentRoom => this.props.currentRoomChange(currentRoom))
            .catch(error => {console.error(error)})
    }

    render() {

        const styles = {
            container: {
                height: '100vh',
                display: 'flex',
                flexDirection: 'row'
            },
            chatContainer: {
                display: 'flex',
                flex: 1
            },
            onlineList: {
                width: '300px',
                height: '100vh',
                flex: 'none',
                padding: 20,
                backgroundColor: '#2c303b',
                color: 'white'
            },
            chatList: {
                padding: 20,
                width: '85%',
                display: 'flex',
                flexDirection: 'column'
            }
        }

        return(
            <div style={styles.container}>
            
                <div style={styles.chatContainer}>
                    <aside style={styles.onlineList}>
                        <h2>List of users</h2>
                        <OnlineContainer />
                    </aside>
                </div>

                <div style={styles.chatList}>
                    <div style={{flex: 1}}>
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