import React, { Component } from 'react';

class MessageList extends Component {
    render() {
        const styles = {
            container: {
                overflowY: 'scroll',
                flex: 1
            },
            ul: {
                listStyle: 'none',
            },
            li: {
                marginTop: 13,
                marginBottom: 13,
            },
            senderUsername: {
                fontWeight: 'bold'
            },
            message: { fontSize: 15}
        }

        return(
            <ul style={styles.ul}>
                {this.props.messages.messages.map((message, index) => (
                    <li key={index} style={styles.li}>
                        <div>
                            <span style={styles.senderUsername}>{message.senderId}</span>
                            <p style={styles.message}>{message.text}</p>
                        </div>
                    </li>
                ))}
            </ul>
        )
    }
}

export default MessageList;