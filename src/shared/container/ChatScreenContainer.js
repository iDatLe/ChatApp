import React, { Component } from 'react';
import ChatScreen from '../components/ChatScreen';
import { connect } from 'react-redux';

class ChatScreenContainer extends Component {
    render() {
        return(
            <ChatScreen
                usernameForm={this.props.usernameForm}
            />
        )
    }
}

function mapStateToProps(state) {
    return {
        usernameForm : state.UsernameReducer
    }
}

// function mapDispatchToProps(dispatch) {

// }

export default connect(mapStateToProps, null)(ChatScreenContainer);