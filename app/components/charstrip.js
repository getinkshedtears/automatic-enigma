import React from 'react';
import Fullscreen from './fullscreen';
import Store from '../store';
import Actions from '../actions';
import {Link} from 'react-router';


class CharStrip extends React.Component {
    constructor(props) {
        super(props);
        this.state = Store.getState();
        this.getClass = this.getClass.bind(this);
        this.toggleStrip = this.toggleStrip.bind(this);
        this._onChange = this._onChange.bind(this);
        this.getImage = this.getImage.bind(this);
        
        Store.listen(this._onChange);
    }
    
    componentWillUnmount() {
        Store.unlisten(this._onChange);
    }
    
    _onChange() {
        this.setState(Store.getState());
    }
    
    getImage(character) {
        return ('background-image: url(' + character.image + ')')
    }
    
    renderCharacters() {
        return this.state.characters.map(function(character, index){
            return <CharLink key = {index} character = {character} />
        })   
    }
    
    getClass() {
        if (this.state.charStripOpen) {
            return 'char-strip-open'
        }
        else return 'char-strip-closed'
    }
    
    toggleStrip() {
        console.log('toggle')
        Actions.toggleStrip();
    }
    
    render() {
        return (
            <div className = 'char-strip-wrapper'>
                <div className = 'char-wrapper-toggle' onClick = {this.toggleStrip}/>
                <div className = 'char-strip'>
                    {this.renderCharacters()}
                </div>
            </div>
        )
    }
    
}

class CharLink extends React.Component {
    constructor(props) {
        super(props)
        
        this.getLink = this.getLink.bind(this);
    }
    
    getLink() {
        return ('characters/' + this.props.character.id);
    }
    
    render() {
        var style = {
            backgroundImage: 'url(' + this.props.character.image + ')'
        }
        
        return (
            
            <Link to = {this.getLink()}><div className = 'char-icon' style = {style}>
                <div className = 'interior'>{this.props.character.name}</div>
            </div></Link>
            
            )
    }
}



module.exports = CharStrip;