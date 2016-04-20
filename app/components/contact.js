import React from 'react';
import Fullscreen from './fullscreen';
import request from 'superagent';

class Contact extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            name: '',
            email: '',
            message: '',
            response: ''
        }
        
        this.updateName = this.updateName.bind(this);
        this.updateEmail = this.updateEmail.bind(this);
        this.updateMessage = this.updateMessage.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
        this.content = this.content.bind(this);
        this.clearInputs = this.clearInputs.bind(this);
    }
    
    updateName(e) {
        this.setState({name: e.target.value})
    }
    
    updateEmail(e) {
        this.setState({email: e.target.value})
    }
    
    updateMessage(e) {
        this.setState({message: e.target.value})
    }
    
    clearInputs() {
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    }
    
    sendMessage(e) {
        e.preventDefault();
        
        if (this.state.name === '' || this.state.email === '' || this.state.message === '') {
            this.setState({response: 'Please fill in all fields'})
        }
        
        else {
        
        var message = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }
        
        request
            .post('../message')
            .send(message)
            .end(function(err, data){
                if (err) {console.log(err)}
                this.setState({response: 'Your message has been successfully sent'})
                this.clearInputs();
            }.bind(this))
        }
        
    }
    
    content() {
        return (
            <div className = 'fullscreen-interior'>
            
            <div id = 'form-wrapper'>
                <form onSubmit = {this.sendMessage}>
                
                    <div id = 'form-name'>
                        <input id = 'name' type = 'text' placeholder = 'your name' onChange = {this.updateName} />
                    </div>
                    
                    <div id = 'form-email'>
                        <input id = 'email' type = 'text' placeholder = 'your email (or the best way to get in touch)' onChange = {this.updateEmail} />
                    </div>
                    
                    <div id = 'form-message'>
                        <textarea id = 'message' onChange = {this.updateMessage} placeholder = 'please make me want to answer you' />
                    </div>
                    
                    <div id = 'form-submit'>
                        <input type = 'submit' value = 'send' />
                        <div id = 'form-response'>{this.state.response}</div>
                    </div>
                </form>
            </div>
            
            
            </div>
            )
    }
    
    render() {
        return (
        <Fullscreen content = {this.content}/>
    )}
}

module.exports = Contact;