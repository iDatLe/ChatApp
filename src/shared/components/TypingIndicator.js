import React, { Component } from 'react';

class TypingIndicator extends Component {
    render() {
        const personTyping = this.props.typing.usersWhoAreTyping

        if (personTyping.length === 0) {
            return <div />
        } else if (personTyping.length === 1) {
            return <p>{personTyping[0]} is typing ...</p>
        } else if (personTyping.length > 1) {
            return <p>{personTyping.join(' and ')} are typing ...</p>
        }
    }
}

export default TypingIndicator;