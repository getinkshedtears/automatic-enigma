import React from 'react';
import Fullscreen from './fullscreen';
import Store from '../store';
import BottomStrip from './bottomstrip';
import CharStrip from './charstrip';
import Poem from '../data/poem';
import Actions from '../actions';

class Characters extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = Store.getState();
        this.getClass = this.getClass.bind(this);
        
        this.content = this.content.bind(this);
        this._onChange = this._onChange.bind(this);
        this.componentWillUnmount = this.componentWillUnmount.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.bottom = this.bottom.bind(this);
        
        Store.listen(this._onChange);
    }
    
    componentWillUnmount() {
        Store.unlisten(this._onChange);
        Actions.incrementTitle();
    }
    
    componentDidMount() {
        this.setState({sidebarOpen: true});
        document.title = Poem[this.state.titleIndex];
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
                <p>I make a concerted effort to write all the characters.</p>

                <p>My collection includes old, young, male, female, human, elder god, and all whatevers in between. They are connected by their shared tendencies to be damaged, unhappy and prone to fixation. They are often outsiders in relation to the settings they occupy. They are fluent in more languages than I am.</p>

                <p>Please find, attached, a handful of mismatched forum apps from the last ~7 years, to serve as a taste of the kind of characters you may run across in your dealings with me.  Note that I <i>prefer</i> not to recycle; most past attempts to squeeze existing characters into settings for which they weren't crafted have failed.</p>
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