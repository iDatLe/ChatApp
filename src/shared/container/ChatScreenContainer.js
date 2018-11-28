import React, { Component } from 'react';
import ChatScreen from '../components/ChatScreen';
import { connect } from 'react-redux';
import {messageAction} from '../redux/actions';

class ChatScreenContainer extends Component {

    messageChange = (message) => {
        this.props.change(message)
    }

    render() {
        return(
            <ChatScreen
                usernameForm={this.props.usernameForm}
                messages={this.props.messages}

                messageChange={this.messageChange}
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatScreenContainer);