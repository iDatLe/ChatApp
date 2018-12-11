import React, { Component } from 'react';
import ChatScreen from '../components/ChatScreen';
import { connect } from 'react-redux';
import {
    messageAction, 
    currentUserAction, 
    currentRoomAction,
    usersTypingAction,
    stoppedTypingAction,
    presenceAction,
} from '../redux/actions';

class ChatScreenContainer extends Component {

    messageChange = (message) => {
        this.props.change(message) //Function to fetch all messages in room
    }

    currentUserChange = (currentUser) => {
        this.props.userChange(currentUser) //Pushes current user to the redux store
    }

    currentRoomChange = (currentRoom) => {
        this.props.currentRoom(currentRoom) //Pushes current room to the redux store
    }

    usersTyping = (users) => {
        this.props.startedTyping(users) // Pushes users currently typing into array
    }

    usersStoppedTyping = (users) => {
        this.props.stoppedTyping(users) //Filters users that stopped typing from array
    }

    presenceChanged = (state, user) => {
        this.props.presenceChanged(state, user)
    }

    render() {
        return(
            <ChatScreen
                usernameForm={this.props.usernameForm}
                messages={this.props.messages}

                messageChange={this.messageChange}
                currentUserChange={this.currentUserChange}
                currentRoomChange={this.currentRoomChange}
                usersTyping={this.usersTyping}
                usersStoppedTyping={this.usersStoppedTyping}
                presenceChanged={this.presenceChanged}
            />
        )
    }
}

function mapStateToProps(state) {
    return {
        usernameForm : state.UsernameReducer,
        messages: state.MessagesReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        change : (message) => {
            dispatch(messageAction(message))
        },
        userChange : (currentUser) => {
            dispatch(currentUserAction(currentUser))
        },
        currentRoom : (currentRoom) => {
            dispatch(currentRoomAction(currentRoom))
        },
        startedTyping : (users) => {
            dispatch(usersTypingAction(users))
        },
        stoppedTyping : (users) => {
            dispatch(stoppedTypingAction(users))
        },
        presenceChanged : (state, user) => {
            dispatch(presenceAction(state, user))
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(ChatScreenContainer);