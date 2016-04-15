var alt = require('./alt');

class Actions {
    updateView(view) {
        return view;
    }
    
    toggleOpen() {
        return true;
    }
    
    setCharacter(name) {
        console.log('update character to ' + name)
        return name;
    }
    
    toggleStrip() {
        return true;
    }

}

module.exports = alt.createActions(Actions);