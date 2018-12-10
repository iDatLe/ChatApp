import React, { Component } from 'react';
import SendMessageForm from '../components/SendMessageForm';
import { connect } from 'react-redux';
import { onChangeAction, resetAction } from '../redux/actions.js';

class SendMessageContainer extends Component {

    onChange = (e) => {
        this.props.change(e.target.name, e.target.value);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const textMessage = this.props.sendMessageForm.text
        this.props.sendMessageForm.currentUser.sendMessage({
            text: textMessage,
            roomId: this.props.sendMessageForm.currentRoom.id
        })
        .then(this.props.resetField())
        
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