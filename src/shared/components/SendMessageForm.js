import React, { Component } from 'react';

 class SendMessageForm extends Component {
     render() {

        const styles = {
            container: {
                padding: 20,
                borderTop: "1px #4c78F solid",
                marginBottom: 20
            },
            form: {
                display: 'flex'
            },
            input: {
                color: 'inherit',
                background: 'none',
                outline: 'none',
                border: 'none',
                flex: 1,
                fontSize: 16,
            }
        }

         return (
             <div style={styles.container}>
                 <form onSubmit={this.props.handleSubmit} style={styles.form}>
                    <input
                        style={styles.input} 
                        type="text"
                        name="text"
                        value={this.props.sendMessageForm.text}
                        placeholder="Send a message" 
                        onChange={this.props.onChange} 
                        autoComplete="off" 
                        />

                     <input type="submit" />
                 </form>
             </div>
         )
     }
 }

 export default SendMessageForm;