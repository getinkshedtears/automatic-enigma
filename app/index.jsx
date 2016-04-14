import React from 'react';
import ReactDOM from 'react-dom';
var Store = require('./store');
var Actions = require('./actions');
import { Router, Route, Link, browserHistory, hashHistory } from 'rrtr';

class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.state = Store.getState();
        
        this.getView = this.getView.bind(this);
        this._onChange = this._onChange.bind(this);
        
        Store.listen(this._onChange);
    }
    
    _onChange() {
        this.setState(Store.getState())
    }
    
    getView() {
        switch(this.state.view) {
            case 'title':
                return (<Title updateView = {this.updateView} open = {this.state.open} toggleOpen = {this.toggleOpen} />)
            case 'about':
                return(<Fullscreen close = {this.updateView} view = {this.state.view}/>)
            default: return true;
        }
    }
    
    updateView(view) {
        Actions.updateView(view);
    }
    
    toggleOpen() {
        Actions.toggleOpen();
    }
    
    render() {
        return (
            <div>
                {this.getView()}
            </div>
            )
    }
}

class Title extends React.Component {
    
    constructor(props) {
        super(props);
        this.onMouseOver = this.onMouseOver.bind(this);
        this.getClassWrapper = this.getClassWrapper.bind(this);
    }
    
    getClassWrapper() {
        if (this.props.open) {
            return 'title-wrapper-open'
        }
        else return ('title-wrapper-closed')
    }
    
    onMouseOver() {
        this.props.toggleOpen();
    }
    
    render() {
        return (<div>
            <div className = {this.getClassWrapper()}>
                <div className = 'title' onMouseOver = {this.onMouseOver}>getinkshedtears</div>
            </div>
                <Categories open = {this.props.open} updateView = {this.props.updateView} />
            </div>)
    }
}

class Categories extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            categories: ['about', 'characters', 'posts', 'contact'],
            active: null
        }
        
        this.getClassWrapper = this.getClassWrapper.bind(this);
        this.getCategories = this.getCategories.bind(this);
        this.updateView = this.updateView.bind(this);
        this.activate = this.activate.bind(this);
        this.deactivate = this.deactivate.bind(this);
        this.getClassCat = this.getClassCat.bind(this);
    }
    
    activate(i) {
        this.setState({active: i})
    }
    
    deactivate() {
        this.setState({active: null})
    }
    
    getClassWrapper() {
        if (this.props.open) {
            return 'category-wrapper-visible'
        }
        else return 'category-wrapper-invisible'
    }
    
    getClassCat(i) {
        if (this.state.active != null) {
            if (this.state.active === i) {
                return 'category-active';
            }
            else return 'category-inactive';
        }
        else return 'category';
    }
    
    getCategories() {
        return this.state.categories.map(function(cat, index){
            return (<div className = 'text-wrapper' key = {index}><div className = {this.getClassCat(index)} onMouseEnter = {this.activate.bind(null, index)} onMouseLeave = {this.deactivate}><Link to={cat}>{cat}</Link></div></div>)
        }.bind(this))
    }
    
    updateView(view) {
        this.props.updateView(view)
    }
    
    render() {
        return (
            
        <div className = {this.getClassWrapper()}>
            {this.getCategories()}
        </div>
        )
    }
}

class Fullscreen extends React.Component{
    constructor(props) {
        super(props);
        this.getContents = this.getContents.bind(this);
    }
    
    getContents() {
        switch(this.props.view) {
            case 'about':
                return <About />
        }
    }
    
    render() {
        return (
            <div className = 'fullscreen'>
                <div className = 'exit' onClick = {this.props.close.bind(null, 'title')}></div>
                {this.getContents()}
            </div>
            )
    }
}

class About extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {return(
        <div className = 'fullscreen'>
        <Link to = '/'><div className = 'exit'/></Link>
        <div className = 'fullscreen-interior'>
        
            <span className = 'text-header'> Gist </span>
            <p><span className = 'important'>Pronunciation:</span> /dʒɪst/</p>

            <p><span className = 'important'>Forms</span>: 20- Claire, 21- Darknepenthe 21- Nepenthe 21- Someboldseer 21- Getinkshedtears</p>

            <p><span className = 'important'>N</span></p>

            <p><span className = 'important'>1.</span> The main or essential part of a matter.</p>

            <p><span className = 'important'>2.</span> An acronym taken from the second, third, fourth, and fifth words of a Boris Pasternak poem which begins, in Russian, Февраль. Достать чернил и плакать!, and which a particular translation renders as "February. Get ink, shed tears!"</p>

            <p><span className = 'important'>3.</span> The would-be lexicographer: 29 year-old cynic, English major, bitter full-time spreadsheet drone, part-time collaborative writer. The attached pages are presented as her roleplaying curriculum vitae, should you have an interest in being part of that last thing.</p>

        </div>
        </div>
    )}
}

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Landing} />
    <Route path="/about" component={About}/>
  </Router>,
  document.getElementById('anchor')
);