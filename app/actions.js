var alt = require('./alt');

class Actions {
    updateView(view) {
        return view;
    }
    
    toggleOpen() {
        return true;
    }
    
    setCharacter(name) {
        return name;
    }
    
    toggleStrip() {
        return true;
    }
    
    setPost(id) {
        return id;
    }
    
    incrementTitle() {
        console.log('title increment')
        return true;
    }

}

module.exports = alt.createActions(Actions);