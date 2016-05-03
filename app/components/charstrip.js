import React from 'react';
import Fullscreen from './fullscreen';
import Store from '../store';
import Actions from '../actions';
import {Link} from 'react-router';


class CharStrip extends React.Component {
    constructor(props) {
        super(props);
        this.state = Store.getState();
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
        var characters = this.state.characters.sort(function(a, b){
            return a.id > b.id
        });
        
        characters = characters.map(function(character, index){
            if (this.props.active && this.props.active == character.id) {
                return null
            }
            else 
            return <CharLink key = {index} character = {character} />
        }.bind(this))
        
        if (this.props.active) {characters.push(<Back />)}
        
        return characters;
    }
    
    render() {
        return (
                <div className = 'char-strip'>
                    {this.renderCharacters()}
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
            
            <Link to = {this.getLink()}><div className = 'circle-icon' style = {style}>
                <div className = 'interior'>{this.props.character.title}</div>
            </div></Link>
            
            )
    }
}

class Back extends React.Component {
    render() {
        
        return (
            
            <Link to = '/characters'><div className = 'char-icon'>
                <div className = 'interior'>Home</div>
            </div></Link>
            
            )
    }
}



module.exports = CharStrip;