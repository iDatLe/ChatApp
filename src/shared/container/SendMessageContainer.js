import React, { Component } from 'react';
import SendMessageForm from '../components/SendMessageForm';
import { connect } from 'react-redux';
import { onChangeAction, resetAction } from '../redux/actions.js';

class SendMessageContainer extends Component {

    onChange = (e) => {
        this.props.change(e.target.name, e.target.value);
        this.props.sendMessageForm.currentUser
            .isTypingIn({roomId: this.props.sendMessageForm.currentRoom.id}) //this will give a typing notification
            .catch(error => console.log('ERROR', error))
    }

    handleSubmit = (e) => { //this function sends texts in the chat room
        e.preventDefault();
        const textMessage = this.props.sendMessageForm.text
        this.props.sendMessageForm.currentUser
            .sendMessage({    //current user sending message
                text: textMessage,                                  //text being sent
                roomId: this.props.sendMessageForm.currentRoom.id   // room id required
            })
            .then(this.props.resetField()) // reset text field after submitting
        
    }

    render() {
        return(
            < SendMessageForm
                sendMessageForm={this.props.sendMessageForm}
                onChange={this.onChange}
                handleSubmit={this.handleSubmit} 
            />
        )
    }
}

function mapStateToProps(state) {
    return {
        sendMessageForm : state.MessagesReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        change: (name, value) => {
            dispatch(onChangeAction(name, value))
        },
        resetField: () => {
            dispatch(resetAction())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SendMessageContainer);