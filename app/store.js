var alt = require('./alt');
var Actions = require('./actions');
var Characters = require('./data/characters');
var Posts = require('./data/posts');

class Store{
    constructor(){
        this.view = 'title'
        this.open = false;
        this.characters = Characters;
        this.posts = Posts;
        this.activeCharacter = Characters[0];
        this.charStripOpen = true;
        this.activePost = Posts[0];
        this.activePostChar = null;
        
        this.bindListeners({
            handleUpdateView: Actions.UPDATE_VIEW,
            handleToggleOpen: Actions.TOGGLE_OPEN,
            handleSetCharacter: Actions.SET_CHARACTER,
            handleToggleStrip: Actions.TOGGLE_STRIP,
            handleSetPost: Actions.SET_POST
        })
    }
    
    handleUpdateView(view) {
        this.view = view;
    }
    
    handleToggleOpen() {
        this.open = !this.open
    }
    
    handleToggleStrip() {
        this.charStripOpen = !this.charStripOpen
    }
    
    handleSetCharacter(name) {
        var character = null;
        for (var i = 0; i < this.characters.length; i++) {
            if (this.characters[i].id === name) {
                character = this.characters[i];
                break;
            }
        }
        this.activeCharacter = character;
    }
    
    handleSetPost(id) {
        var post = null;
        for (var i = 0; i < this.posts.length; i++) {
            if (this.posts[i].id === id){
                post = this.posts[i];
                break;
            }
        }
        this.activePost = post;
        
        if (this.activePost.character) {
            var character = null;
            for (var i = 0; i < this.characters.length; i++) {
                if (this.characters[i].id === this.activePost.character) {
                    character = this.characters[i]
                }
            }
            this.activePostChar = character;
        }
    }

}

module.exports = alt.createStore(Store, 'Store');