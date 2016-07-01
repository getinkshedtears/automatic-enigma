import React from 'react';
import Fullscreen from './fullscreen';
import BottomStrip from './bottomstrip';
import Store from '../store';
import {Link} from 'react-router';
var Poem = require('../data/poem');
import Actions from '../actions';

class Posts extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = Store.getState();
        this.getClass = this.getClass.bind(this);
        
        this.content = this.content.bind(this);
        this._onChange = this._onChange.bind(this);
        this.componentWillUnmount = this.componentWillUnmount.bind(this);
        this.links = this.links.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        
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
            <Link to = '/posts/starters'><div className = 'circle-icon'>
                <div className = 'interior'>Starters</div>
                </div></Link>
            <Link to = '/posts/inmediasres'><div className = 'circle-icon'>
                <div className = 'interior'>In Medias Res</div>
            </div></Link>
            </div>
        )
    }
    
    content() {
        return (
            <div className = {this.getClass()}>
                <div className = 'interior-resize'>
                    <div>
                        <div className = 'posts-header'>Genre</div>
                        <p className = 'posts-p'>While a marginal chance exists that I might be able to chat about your favorite fandom on an OOC level, I am only interested in writing original plots in original settings with original characters. (Yeah, I know, nothing new under the sun.)</p>
                        <p className = 'posts-p'>An injection of non-standard weirdness -- ghosts, demons, curses, murderers, secret societies, evil babies -- into an otherwise mundane universe is my favorite thing. Like fleur de sel on chocolate chip cookies. I keep away from wholly fictional worlds, from high fantasy, and from hard science fiction. My happy place is a sort of grimdark fantastic realism.  Influences: Lynch, Tarkovsky, Eco, Bolaño, Peake, Donoso.</p>
                        <p className = 'posts-p'>Plots from scratch are preferable, but several of my starters as adoptable and would be willing to use them as jumping-off points for something new if such a thing would be appealing. Let me know!</p>
                    </div>
                    
                    <div>
                        <div className = 'posts-header'>Maturity</div>
                        <p className = 'posts-p'>Your limits, should you have any, will be respected within reason. I have none: if you're putting so much effort into making me uncomfortable that I'm offended, then you're not concentrating hard enough on writing, and we won't work well together.</p>
                        <p className = 'posts-p'>I'm happy enough to write explicit sex scenes if the plot naturally goes in that direction.  Plotless porn isn't my cup of tea, <i>but</i> I am more likely to be talked into a sexcentric setup if it involves godawful taboo-breaking elements.</p>
                    </div>
                    
                    <div>
                        <div className = 'posts-header'>Pace</div>
                        <p className = 'posts-p'>I am a writing tortoise. I have a personal rule to respond within a week of the last time I heard from you; I don't guarantee anything faster than that, but if I had to estimate, I'd put my average turnaround time at about three days unless we're rapid-firing. To compensate for my lack of alacrity, I am mad dependable and will continue writing with you for years if you stick around.</p>
                    </div>
                    
                    <div>
                        <div className = 'posts-header'>Elements of Style</div>
                        <p className = 'posts-p'>I default to writing in the third person and from the limited perspective of a single main character (from which I'll occasionally stray for narrative purposes); but I enjoy writing casts and have no problem moving around a handful of characters in a single scene. I will get upset with you if you try to put words in the mouth of any character I've put more than a sentence into describing without asking me.</p>
                        <p className = 'posts-p'>My typical post is about 3 paragraphs long, but I don't spend a lot of time counting words. Introductory offerings are longer. Examples of both can be clicked on to the left.</p>
                        <p className = 'posts-p'>Quality matters!  I don't promise perfection, but I do promise effort behind every post.  I proofread, I reread, and I try to produce writing that could conceivably be published without a lot of editing.  I prefer to write with people who take an equally writing-serious approach.</p>
                    </div>
                    
                    <div>
                        <div className = 'posts-header'>Media</div>
                        <p className = 'posts-p'>As far as I'm concerned, if you can put words on it and they stay there, it is a viable roleplaying medium. Google Drive, private forums, public forums, blank white webpages with nothing but words, Storium, Tumblr, email: all perfectly acceptable. A very important exception: You will not get me on an instant messaging program unless I think you are just everything. And I don't think anyone is everything.</p>
                    </div>
                    
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