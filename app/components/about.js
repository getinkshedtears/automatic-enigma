import React from 'react';
import Fullscreen from './fullscreen';

class About extends React.Component {
    constructor(props) {
        super(props);
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
            </div>
            </div>
            )
    }
    
    render() {return(
        <Fullscreen content = {this.content}/>
    )}
}

module.exports = About;