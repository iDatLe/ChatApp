import React, { Component } from 'react';
import MessageList from '../components/MessageList';
import { connect } from 'react-redux';

class MessageContainer extends Component {
    render() {
        return(
            <div>
                <MessageList 
                    messages={this.props.messages}
                />                
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        messages: state.MessagesReducer
    }
}

export default connect(mapStateToProps, null)(MessageContainer);