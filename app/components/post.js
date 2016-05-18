import React from 'react';
import Fullscreen from './fullscreen';
import Store from '../store';
import Actions from '../actions';
import BottomStrip from './bottomstrip';
import {Link} from 'react-router';
import Poem from '../data/poem';


class Character extends React.Component {
    constructor(props) {
        super(props)

        Actions.setPost(this.props.params.post);

        this.state = Store.getState();
        
        this.getClass = this.getClass.bind(this);
        this.content = this.content.bind(this);
        this._onChange = this._onChange.bind(this);
        this.renderPost = this.renderBio.bind(this);
        this.componentWillUnmount = this.componentWillUnmount.bind(this);
        this.getClassSidebar = this.getClassSidebar.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.toggleSidebar = this.toggleSidebar.bind(this);
        this.getClassPadded = this.getClassPadded.bind(this);
        this.postChar = this.postChar.bind(this);
        this.links = this.links.bind(this);

        Store.listen(this._onChange);
    }
    
    
    componentDidMount() {
        this.setState({sidebarOpen: true});
        document.title = Poem[this.state.titleIndex];
    }
    
    componentWillUnmount() {
        Actions.incrementTitle();
        Store.unlisten(this._onChange);
    }
    
    componentWillReceiveProps(newProps) {
        console.log(newProps)
        Actions.setPost(newProps.params.post)
        var myDiv = document.getElementById('post');
        myDiv.scrollTop = 0;
    }

    renderBio() {
        return {__html: this.state.activePost.text};
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
    
    links() {
        return (
            <div>
            <Link to = '/posts/starters'><div className = 'circle-icon'>
                <div className = 'interior'>Starters</div>
                </div></Link>
            <Link to = '/posts/inmediasres'><div className = 'circle-icon'>
                <div className = 'interior'>In Medias Res</div>
            </div></Link>
            <Link to = '/posts'><div className = 'circle-icon'>
                <div className = 'interior'>Posts Home</div>
            </div></Link>
            </div>
        )
    }
    
    postChar() {
        console.log(this.state.activePost)
        
        if (this.state.activePost.character){
            var link = ('/characters/' + this.state.activePostChar.id);
            var image = 'url(' + this.state.activePostChar.image + ')';
            
            return (
                
                <div className = {this.getClassSidebar()}>
                    <div className = 'sidebarToggle' onClick = {this.toggleSidebar}/>
                    <Link to = {link}><div className = 'circle-icon' style = {{'backgroundImage' : image}}><div className = 'interior'>{this.state.activePostChar.title}</div></div></Link>
                </div>
                
                )
        }
        
        else return null
    }
    
    content() {
        return (
            <div className = {this.getClass()}>
            
                <div className = 'interior-resize' id = 'bio'>
                
                { this.postChar() }
                
                <div className = {this.getClassPadded()} dangerouslySetInnerHTML={this.renderPost()} />
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

module.exports = Character;