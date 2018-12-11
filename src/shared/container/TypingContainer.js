import React, { Component } from 'react';
import { connect } from 'react-redux';
import TypingIndicator from '../components/TypingIndicator';

class TypingContainer extends Component {
    render() {
        return (
            <TypingIndicator 
                typing={this.props.typing}
            />
        )
    }
}

function mapStateToProps(state) {
    return {
        typing: state.MessagesReducer
    }
}

export default connect(mapStateToProps, null)(TypingContainer);