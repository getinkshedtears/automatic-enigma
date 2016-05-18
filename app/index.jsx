import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, hashHistory } from 'react-router';

import About from './components/about';
import Character from './components/character';
import Characters from './components/characters';
import Contact from './components/contact';
import Landing from './components/landing';
import Library from './components/library';
import Post from './components/post';
import Posts from './components/posts';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path ="/" component={Landing}/>
    <Route path ="/about" component={About}/>
    <Route path ='/characters' component = {Characters}/>
    <Route path = '/characters/:name' component = {Character}/>
    <Route path ='/posts' component = {Posts}/>
    <Route path = '/posts/:type' component = {Library}/>
    <Route path = '/posts/post/:post' component = {Post}/>
    <Route path ='/contact' component = {Contact}/>
  </Router>,
  document.getElementById('anchor')
);