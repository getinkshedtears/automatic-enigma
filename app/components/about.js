import React from 'react';
import Fullscreen from './fullscreen';

class About extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            activeThing4: null,
            thing4: [
                ' Sometimes a photoblogger; less often a blogger of other things.',
                ' One who, when the endtimes come, will be able to make a living shaving sheep, spinning yarn, and knitting socks.',
                ' A massive failure of a webdev, forever starting and not completing apps/projects/games, like Selva: the post-apocalyptic Amazonian jungle romp.',
                ' Long-time internet roleplayer who can (although not very often) be seen on the RPG-D.',
                " Gamer, unrepentantly obsessed with The Binding of Isaac, Don't Starve, and Stardew Valley."
                ]
        }
        
        this.setThing4 = this.setThing4.bind(this);
        this.content = this.content.bind(this);
        this.getThing4Class = this.getThing4Class.bind(this);
        this.getThing4 = this.getThing4.bind(this);
    }
    
    setThing4(int) {
        this.setState({activeThing4: int})
    }
    
    getThing4Class(int) {

        if (this.state.activeThing4 === int) {
            return 'thing4Active'
        }
        else return 'thing4Inactive'
    }
    
    getThing4() {
        return this.state.thing4.map(function(thing, index){
            return <span key = {index} className = {this.getThing4Class(index)}>{thing}</span>
        }.bind(this))
    }
    
    content() {
        return(
            <div>
            <div className = 'name'> Gist </div>
                <div className = 'fullscreen-interior'>
                
                    <p><span className = 'important'>Pronunciation:</span> /dʒɪst/</p>
        
                    <p><span className = 'important'>Forms</span>: 20- Claire, 21- Darknepenthe 21- Nepenthe 21- Someboldseer 21- Getinkshedtears</p>
        
                    <p><span className = 'important'>N</span></p>
        
                    <p><span className = 'important'>1.</span> The main or essential part of a matter.</p>
        
                    <p><span className = 'important'>2.</span> An acronym taken from the second, third, fourth, and fifth words of a Boris Pasternak poem which begins, in Russian, Февраль. Достать чернил и плакать!, and which a particular translation renders as "February. Get ink, shed tears!"</p>
        
                    <p><span className = 'important'>3.</span> The would-be lexicographer: 29 year-old cynic, English major, bitter full-time spreadsheet drone, part-time collaborative writer. The attached pages are presented as her roleplaying curriculum vitae, should you have an interest in being part of that last thing.</p>
                
                    <p><span className = 'important'>4.&nbsp;&nbsp;</span> 
                    
                        {this.getThing4()}
                        
                    </p>
                
                <div className = 'findMes'>
                
                    <a href = 'http://getinkshedtears.tumblr.com'><div className = 'findMe' onMouseEnter = {this.setThing4.bind(null, 0)} onMouseLeave = {this.setThing4.bind(null, null)}>Tumblr</div></a>
                    <a href = 'http://www.ravelry.com/people/someboldseer'><div className = 'findMe' onMouseEnter = {this.setThing4.bind(null, 1)} onMouseLeave = {this.setThing4.bind(null, null)}>Ravelry</div></a>
                    <a href = 'http://selva.gist.space/'><div className = 'findMe' onMouseEnter = {this.setThing4.bind(null, 2)} onMouseLeave = {this.setThing4.bind(null, null)}>Selva</div></a>
                    <a href = 'http://rpg-directory.org/user-5304.html'><div className = 'findMe' onMouseEnter = {this.setThing4.bind(null, 3)} onMouseLeave = {this.setThing4.bind(null, null)}>RPG-D</div></a>
                    <a href = 'http://steamcommunity.com/profiles/76561197996737744'><div className = 'findMe' onMouseEnter = {this.setThing4.bind(null, 4)} onMouseLeave = {this.setThing4.bind(null, null)}>Steam</div></a>
                
                </div>
                
                </div>
            </div>
            )
    }
    
    render() {return(
        <Fullscreen content = {this.content}/>
    )}
}

module.exports = About;