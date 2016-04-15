import React from 'react';
import Fullscreen from './fullscreen';
import Store from '../store';
import Actions from '../actions';
import CharStrip from './charstrip';


class Character extends React.Component {
    constructor(props) {
        super(props)

        Actions.setCharacter(this.props.params.name);

        this.state = Store.getState();
        
        this.getClass = this.getClass.bind(this);
        this.content = this.content.bind(this);
        this._onChange = this._onChange.bind(this);
        this.renderBio = this.renderBio.bind(this);
        this.componentWillUnmount = this.componentWillUnmount.bind(this);

        Store.listen(this._onChange);
    }
    
    componentWillUnmount() {
        Store.unlisten(this._onChange);
    }
    
    componentWillReceiveProps(newProps) {
        Actions.setCharacter(newProps.params.name)
        var myDiv = document.getElementById('bio');
        myDiv.scrollTop = 0;
    }

    renderBio() {
        return {__html: this.state.activeCharacter.biography};
    }
    
    _onChange() {
        this.setState(Store.getState())
    }
    
    getClass() {
        if (this.state.charStripOpen) {
            return 'char-wrapper-open'
        }
        else return 'char-wrapper-closed'
    }
    
    content() {
        return (
            <div className = {this.getClass()}>
            <div className = 'interior-resize' id = 'bio' dangerouslySetInnerHTML={this.renderBio()}>
            
            </div>
            <CharStrip />
            </div>
            )
    }
    
    render() {
        return (
        <Fullscreen content = {this.content}/>
    )}
}

module.exports = Character;