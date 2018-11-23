import React, { Component } from 'react';
import UsernameForm from '../components/UsernameForm';
import { connect } from 'react-redux';
import { onChangeAction, usernameForm } from '../redux/actions.js';

class UsernameContainer extends Component {

    onChange = (e) => {
        this.props.change(e.target.name, e.target.value);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const data = {username:this.props.usernameForm.username};
        console.log(data)
        this.props.submit(data);
    }


    render() {
        return(
            < UsernameForm
                usernameForm={this.props.usernameForm}
                onChange={this.onChange}
                handleSubmit={this.handleSubmit} 
            />
        )
    }
}

function mapStateToProps(state) {
    return {
        usernameForm : state.UsernameReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        change: (name, value) => {
            dispatch(onChangeAction(name, value))
        },
        submit: (data) => {
            dispatch(usernameForm(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsernameContainer);