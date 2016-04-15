import React from 'react';
import ReactDOM from 'react-dom';
var Store = require('./store');
var Actions = require('./actions');
import { Router, Route, Link, browserHistory, hashHistory } from 'react-router';

import About from './components/about';
import Character from './components/character';
import Characters from './components/characters';
import Contact from './components/contact';
import Landing from './components/landing';
import Posts from './components/posts';


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path ="/" component={Landing}/>
    <Route path ="/about" component={About}/>
    <Route path ='/characters' component = {Characters}/>
    <Route path = '/characters/:name' component = {Character}/>
    <Route path ='/posts' component = {Posts}/>
    <Route path ='/contact' component = {Contact}/>
  </Router>,
  document.getElementById('anchor')
);