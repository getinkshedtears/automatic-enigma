var alt = require('./alt');

class Actions {
    updateView(view) {
        return view;
    }
    
    toggleOpen() {
        return true;
    }
}

module.exports = alt.createActions(Actions);