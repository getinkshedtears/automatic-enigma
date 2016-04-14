var alt = require('./alt');
var Actions = require('./actions');

class Store{
    constructor(){
        this.view = 'title'
        this.open = false;
        
        this.bindListeners({
            handleUpdateView: Actions.UPDATE_VIEW,
            handleToggleOpen: Actions.TOGGLE_OPEN
        })
    }
    
    handleUpdateView(view) {
        this.view = view;
    }
    
    handleToggleOpen() {
        this.open = !this.open
    }
}

module.exports = alt.createStore(Store, 'Store');