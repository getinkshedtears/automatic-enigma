import React from 'react';
import Fullscreen from './fullscreen';

class Posts extends React.Component {
    constructor(props) {
        super(props)
    }
    
    content() {
        return (
            <div>Test</div>
            )
    }
    
    render() {
        return (
        <Fullscreen content = {this.content}/>
    )}
}

module.exports = Posts;