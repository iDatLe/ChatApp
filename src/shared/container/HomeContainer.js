import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from '../pages/Home';

class HomeContainer extends Component {
    render() {
        return(
            <Home
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

export default connect(mapStateToProps, null)(HomeContainer);