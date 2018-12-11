import React, { Component } from 'react';
import { connect } from 'react-redux';
import OnlineList from '../components/OnlineList';

class OnlineContainer extends Component {
    render() {
        return (
            <OnlineList 
                online={this.props.online}
            />
        )
    }
}

function mapStateToProps(state) {
    return {
        online: state.MessagesReducer
    }
}

export default connect(mapStateToProps, null)(OnlineContainer);