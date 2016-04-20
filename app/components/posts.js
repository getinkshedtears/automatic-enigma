import React from 'react';
import Fullscreen from './fullscreen';
import BottomStrip from './bottomstrip';
import Store from '../store';
import {Link} from 'react-router';

class Posts extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = Store.getState();
        this.getClass = this.getClass.bind(this);
        
        this.content = this.content.bind(this);
        this._onChange = this._onChange.bind(this);
        this.componentWillUnmount = this.componentWillUnmount.bind(this);
        this.links = this.links.bind(this);
        
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
    
    links() {
        return (
            <div>
            <Link to = '/posts/starters'><div className = 'posts-link'>
                <div className = 'interior'>Starters</div>
                </div></Link>
            <Link to = '/posts/inmediasres'><div className = 'posts-link'>
                <div className = 'interior'>In Medias Res</div>
            </div></Link>
            </div>
        )
    }
    
    content() {
        return (
            <div className = {this.getClass()}>
                <div className = 'interior-resize'>
                    <p>While a marginal chance exists that I might be able to chat about your favorite fandom on an OOC level, I am only interested in writing original plots in original settings with original characters. (Yeah, I know, nothing new under the sun.)</p>
                    <p>A sprinkling of non-standard weirdness -- ghosts, demons, curses, murderers, secret societies, evil babies -- into an otherwise mundane universe is my favorite thing. Like fleur de sel on chocolate chip cookies. I keep away from wholly fictional worlds, from high fantasy, and from hard science fiction. My happy place is a sort of grimdark fantastic realism.</p>
                    <p>Plots from scratch are preferable, but I've marked several of my starters as adoptable and would be willing to use them as jumping-off points for something new if such a thing would be appealing. Let me know!</p>
                    <p>Your limits, should you have any, will be respected within reason. I have none: fiction has to work very hard to offend me. If you're putting that much effort into making me uncomfortable, then you're not concentrating hard enough on writing.</p>
                    <p>I default to writing in the third person and from the limited perspective of a single main character (from which I'll occasionally stray for narrative purposes); but I enjoy writing casts and have no problem moving around a handful of characters in a single scene. I will get upset with you if you try to put words in their mouths.</p>
                    <p>As far as I'm concerned, if you can put words on it and they stay there, it is a viable roleplaying medium. Google Drive, private forums, public forums, blank white webpages with nothing but words, Storium, Tumblr, email: all perfectly acceptable. A very important exception: You will not get me on an instant messaging program unless I think you are just everything. And I don't think anyone is everything.</p>
                    <p>My typical post is about 3 paragraphs long, but I don't spend a lot of time counting words. Introductory offerings are longer. Examples of both can be clicked on to the left.</p>
                    <p>I am a writing turtle. I have a personal rule to respond within a week; I don't guarantee anything faster than that, but if I had to estimate, I'd put my average turnaround time at about three days unless we're rapid-firing. To compensate for my lack of alacrity, I am mad dependable and will continue writing with you for years if you stick around.</p>
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

module.exports = Posts;