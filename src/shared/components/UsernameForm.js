import React, { Component } from 'react';
import styles from '../css/username.css';

 class UsernameForm extends Component {
     render() {
         return (
             <div className="username">
                <h1>Welcome to ChatterBox</h1>
                <div className="username__container">
                    <h3>Please enter a username to begin chatting!</h3>
                    <form onSubmit={this.props.handleSubmit}>
                        <input 
                            type="text"
                            name="username"
                            value={this.props.usernameForm.username}
                            placeholder="What is your username?" 
                            onChange={this.props.onChange} 
                            // autoComplete="off" 
                            />
                        <input type="submit" />
                    </form>
                 </div>
             </div>
         )
     }
 }

 export default UsernameForm;