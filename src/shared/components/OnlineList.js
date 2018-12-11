import React, { Component } from 'react';

class OnlineList extends Component {
    render () {
        const onlineUsers = this.props.online.currentRoom.users
        // console.log(this.props.online.userPresence)
        if(onlineUsers) {
            return (
                <ul>
                    {onlineUsers.map((user, index) => {
                        return <li key={index}>{user.name} ({user.presence.state})</li>
                    })}
                </ul>
            )
        } else {
            return <p>Loading...</p>
        }
    }
}

export default OnlineList;