import React, { Component } from 'react';
import { connect } from 'react-redux';
import OnlineList from '../components/OnlineList';
import { deleteUserAction } from '../redux/actions';

class OnlineContainer extends Component {

    deleteUser = () => {
        const user = this.props.username.username
        const data = {user: user}
        this.props.delete(data)
    }

    render() {
        return (
            <OnlineList 
                online={this.props.online}

                deleteUser={this.deleteUser}
            />
        )
    }
}

function mapStateToProps(state) {
    return {
        online: state.MessagesReducer,
        username: state.UsernameReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        delete: (data) => {
            dispatch(deleteUserAction(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OnlineContainer);