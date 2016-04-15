import React from 'react';
import { Link } from 'react-router';

class Fullscreen extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className = 'fullscreen'>
                <Link to = '/'><div className = 'exit'></div></Link>
                
                {this.props.content()}

            </div>
            )
    }
}

module.exports = Fullscreen;