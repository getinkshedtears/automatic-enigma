import React from 'react';
import Fullscreen from './fullscreen';
import Store from '../store';
import Actions from '../actions';
import {Link} from 'react-router';


class BottomStrip extends React.Component {
    constructor(props) {
        super(props);
        this.state = Store.getState();
        this.getClass = this.getClass.bind(this);
        this.toggleStrip = this.toggleStrip.bind(this);
        this._onChange = this._onChange.bind(this);
        
        Store.listen(this._onChange);
    }
    
    componentWillUnmount() {
        Store.unlisten(this._onChange);
    }
    
    _onChange() {
        this.setState(Store.getState());
    }
    
    getClass() {
        if (this.state.charStripOpen) {
            return 'bottomstrip-open'
        }
        else return 'bottomstrip-closed'
    }
    
    toggleStrip() {
        Actions.toggleStrip();
    }
    
    render() {
        return (
            <div className = 'bottomstrip-wrapper'>
                <div className = 'bottomstrip-toggle' onClick = {this.toggleStrip}/>
                <div className = 'bottomstrip'>
                    {this.props.contents}
                </div>
            </div>
        )
    }
    
}

module.exports = BottomStrip;