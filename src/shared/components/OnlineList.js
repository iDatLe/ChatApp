import React, { Component } from 'react';

class OnlineList extends Component {
    render () {
        const onlineUsers = this.props.online.currentRoom.users

        const styles = {
            li: {
                display: 'flex',
                alignItems: 'center',
                listStyleType: 'none',
                marginTop: 5,
                marginBottom: 5,
                paddingTop: 2,
                paddingBottom: 2
            },
            div: {
                borderRadius: '50%',
                width: 11,
                height: 11,
                marginRight: 10
            }
        }
        // console.log(this.props.online.userPresence)
        if(onlineUsers) {
            return (
                <div>
                    <ul>
                        {onlineUsers.map((user, index) => {
                            return ( 
                                <li key={index} style={styles.li}>
                                    <div style={{
                                        ...styles.div,
                                        backgroundColor: 
                                        user.presence.state === 'online' ? '#539eff' : '#414756'
                                    }} />
                                        {user.name}
                                </li>
                            )
                        })}
                    </ul>

                    <button onClick={() => this.props.deleteUser()}>Delete yourself!</button>
                </div>
            )
        } else {
            return <p>Loading...</p>
        }
    }
}

export default OnlineList;