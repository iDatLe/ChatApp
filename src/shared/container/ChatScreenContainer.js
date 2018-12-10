import React, { Component } from 'react';
import ChatScreen from '../components/ChatScreen';
import { connect } from 'react-redux';
import {messageAction, currentUserAction, currentRoomAction} from '../redux/actions';

class ChatScreenContainer extends Component {

    messageChange = (message) => {
        this.props.change(message)
    }

    currentUserChange = (currentUser) => {
        this.props.userChange(currentUser)
    }

    currentRoomChange = (currentRoom) => {
        this.props.currentRoom(currentRoom)
    }

    render() {
        return(
            <ChatScreen
                usernameForm={this.props.usernameForm}
                messages={this.props.messages}
                messageChange={this.messageChange}
                currentUserChange={this.currentUserChange}
                currentRoomChange={this.currentRoomChange}
            />
        )
    }
}

function mapStateToProps(state) {
    return {
        usernameForm : state.UsernameReducer,
        messages: state.MessageReducer
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
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(ChatScreenContainer);