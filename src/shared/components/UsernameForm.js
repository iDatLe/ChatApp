import React, { Component } from 'react';

 class UsernameForm extends Component {
     render() {
         return (
             <div>
                 <form onSubmit={this.props.handleSubmit}>
                    <input 
                        type="text"
                        name="username"
                        value={this.props.usernameForm.username}
                        placeholder="What is your username?" 
                        onChange={this.props.onChange} />

                     <input type="submit" />
                 </form>
             </div>
         )
     }
 }

 export default UsernameForm;