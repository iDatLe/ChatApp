import React, { Component } from 'react';

 class SendMessageForm extends Component {
     render() {
         return (
             <div>
                 <form onSubmit={this.props.handleSubmit}>
                    <input 
                        type="text"
                        name="text"
                        value={this.props.sendMessageForm.text}
                        placeholder="What is your text?" 
                        onChange={this.props.onChange} />

                     <input type="submit" />
                 </form>
             </div>
         )
     }
 }

 export default SendMessageForm;