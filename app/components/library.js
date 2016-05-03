import React from 'react';
import Fullscreen from './fullscreen';
import BottomStrip from './bottomstrip';
import Store from '../store';
import {Link} from 'react-router';

class Library extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = Store.getState();
        this.getClass = this.getClass.bind(this);
        
        console.log('params');
        console.log(this.props.params);
        
        this.content = this.content.bind(this);
        this._onChange = this._onChange.bind(this);
        this.componentWillUnmount = this.componentWillUnmount.bind(this);
        this.links = this.links.bind(this);
        this.getPosts = this.getPosts.bind(this);
        
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
    
    getPosts() {
        var starter = (this.props.params.type === 'starters');
        var arr = this.state.posts.map(function(post){
            var link = ('/posts/post/' + post.id);
            
            if (post.starter === starter) {
                return (<div className = 'library-post-wrapper'>
                <Link to = {link}><div className = 'interior'>{post.summary}</div></Link>
                </div>)
            }
        })
        return arr;
    }
    
    links() {
        return (
            <div>
            {this.props.params.type === 'inmediasres'
            ? 
            <Link to = '/posts/starters'><div className = 'circle-icon'>
                <div className = 'interior'>Starters</div>
            </div></Link>
                :
            <Link to = '/posts/inmediasres'><div className = 'circle-icon'>
                <div className = 'interior'>In Medias Res</div>
            </div></Link>
            }    
                
                
            <Link to = '/posts'><div className = 'circle-icon'>
                <div className = 'interior'>Back</div>
            </div></Link>
            </div>
        )
    }
    
    content() {
        return (
            <div className = {this.getClass()}>
                <div className = 'interior-resize'>
                    {this.getPosts()}
                </div>
            <BottomStrip contents = {this.links()} />
            </div>
            )
    }
    
    render() {
        return (
        <Fullscreen content = {this.content}/>
    )}
}

module.exports = Library;