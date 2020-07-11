import ActionTypes from './ActionTypes';

class CityStore {

    constructor(dispatcher) {
        // internal state
        this._selectedCityIndex = 0;
        this._availableCities = ['Berlin', 'Paris', 'Helsinki', 'Cologne'];

        // change listeners (interested views)
        this._changeListeners = [];

        // to access state variables from dispatcher register callback-method
        let storeContext = this;

        // register self at dispatcher
        dispatcher.register(function (payload) {

            if (payload.actionType === ActionTypes.NEXT_CITY) {

                // calculate new index
                const newIndex = ((storeContext._selectedCityIndex + 1)
                    % storeContext._availableCities.length);

                // store new index
                storeContext._selectedCityIndex = newIndex;

                // emit change to listeners (views)
                storeContext.emitChange();
            }
        })
    }

    // public getter for view
    getSelectedCity() {
        return this._availableCities[this._selectedCityIndex];
    }

    // called dispatcher callback method
    emitChange() {
        this._changeListeners.forEach(callback => callback());
    }

    // called from interested view
    addChangeListener(callback) {
        this._changeListeners.push(callback)
    }

    // called from interested view
    removeChangeListener(callback) {
        this._changeListeners = this._changeListeners.filter(
            clb => clb !== callback
        )
    }

}

export default CityStore;