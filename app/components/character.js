import React from 'react';
import Fullscreen from './fullscreen';
import Store from '../store';
import Actions from '../actions';
import CharStrip from './charstrip';
import BottomStrip from './bottomstrip';
import {Link} from 'react-router'


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
        this.getClassSidebar = this.getClassSidebar.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.toggleSidebar = this.toggleSidebar.bind(this);
        this.getClassPadded = this.getClassPadded.bind(this);
        this.charPosts = this.charPosts.bind(this);

        Store.listen(this._onChange);
    }
    
    componentDidMount() {
        this.setState({sidebarOpen: true})
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
            return 'bottomstrip-open'
        }
        else return 'bottomstrip-closed'
    }
    
    getClassSidebar() {
        if(this.state.sidebarOpen){
            return 'sidebar-open';
        }
        else return 'sidebar-closed';
    }
    
    getClassPadded() {
        if(this.state.sidebarOpen) {
            return 'padded-sidebar';
        }
        else return 'padded';
    }
    
    toggleSidebar() {
        this.setState({sidebarOpen : !this.state.sidebarOpen})
    }
    
    charPosts() {
        var character = this.state.activeCharacter;
        var charPosts = [];
        this.state.posts.forEach(function(post) {
            if (post.character === character.id) {
                charPosts.push(post);
            }  
        })
        if (charPosts.length !== 0) {
            return charPosts.map(function(post, index){
                var link = '/posts/post/' + post.id;
                return <Link to = {link}><div className = 'post-wrapper' key = {index}><div className = 'post-text-wrapper'><div className = 'post-text'><div dangerouslySetInnerHTML = {{__html : post.text}} /></div></div></div></Link>
            })
        }
        else {
            return null
        }
    }
    
    content() {
        return (
            <div className = {this.getClass()}>
            
            <div className = 'interior-resize' id = 'bio'>
            
            { this.charPosts() !== null ?
            <div className = {this.getClassSidebar()}>
                <div className = 'sidebarToggle' onClick = {this.toggleSidebar}/>
                    {this.charPosts()}
                </div>
                :
                null
            }
            
            <div className = {this.getClassPadded()} dangerouslySetInnerHTML={this.renderBio()} />
            </div>
                <BottomStrip contents = {<CharStrip active = {this.props.params.name} />} />
            </div>
            )
    }
    
    render() {
        return (
        <Fullscreen content = {this.content}/>
    )}
}

module.exports = Character;