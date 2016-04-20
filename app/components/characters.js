import React from 'react';
import Fullscreen from './fullscreen';
import Store from '../store';
import BottomStrip from './bottomstrip';
import CharStrip from './charstrip';

class Characters extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = Store.getState();
        this.getClass = this.getClass.bind(this);
        
        this.content = this.content.bind(this);
        this._onChange = this._onChange.bind(this);
        this.componentWillUnmount = this.componentWillUnmount.bind(this);
        this.bottom = this.bottom.bind(this);
        
        Store.listen(this._onChange);
    }
    
    componentWillUnmount() {
        Store.unlisten(this._onChange);
    }
    
    _onChange() {
        this.setState(Store.getState())
    }
    
    getClass() {
        if (this.state.charStripOpen) {
            return 'bottomstrip-open'
        }
        else return 'bottomstrip-closed'
    }
    
    bottom() {
        return <CharStrip />
    }
    
    content() {
        return (
            <div className = {this.getClass()}>
            <div className = 'interior-resize'>
                <p>I write all the characters.</p>

                <p>Old, young, male, female, human, elder god, all whatevers in between. They are connected by their shared tendencies to be damaged, unhappy and prone to fixation. They are often outsiders in relation to the settings they occupy. They are fluent in more languages than I am.</p>

                <p>Please find, attached, a handful of mismatched forum apps from the last ~7 years, to serve as a taste of the kind of characters you may run across in your dealings with me.</p>
            </div>
            <BottomStrip contents = {this.bottom()} />
            </div>
            )
    }
    
    render() {
        return (
        <Fullscreen content = {this.content}/>
    )}
}

module.exports = Characters;