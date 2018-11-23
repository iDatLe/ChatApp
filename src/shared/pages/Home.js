import React, { Component } from 'react';
import UsernameContainer from '../container/UsernameContainer.js';
import ChatScreenContainer from '../container/ChatScreenContainer.js';

class Home extends Component {
    render() {
        if (this.props.usernameForm.currentScreen === 'WhatIsYourUsernameScreen') {
            return <UsernameContainer />
        } else if (this.props.usernameForm.currentScreen === 'ChatScreen') {
            return <ChatScreenContainer />
        }
    }
}

export default Home;