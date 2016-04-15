import React from 'react';
import Store from '../store';
import Actions from '../actions';
import { Link } from 'react-router';

class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.state = Store.getState();
        
        this.getView = this.getView.bind(this);
        this._onChange = this._onChange.bind(this);
        this.componentWillUnmount = this.componentWillUnmount.bind(this)
        
        Store.listen(this._onChange);
    }
    
    componentWillUnmount() {
        Store.unlisten(this._onChange);
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
            return (<div className = 'text-wrapper' key = {index}><Link to={cat}><div className = {this.getClassCat(index)} onMouseEnter = {this.activate.bind(null, index)} onMouseLeave = {this.deactivate}>{cat}</div></Link></div>)
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

module.exports = Landing;