import React from 'react';
import {cityStore, dispatcher} from './architecture/ArchitectureRegistry'
import ActionTypes from './architecture/ActionTypes';

class App extends React.Component {

    constructor(props) {
        super(props);

        // set initial state
        this.state = {
            currentCity: cityStore.getSelectedCity()
        }
    }

    componentDidMount() {
        // add change listener
        cityStore.addChangeListener(() => this.onChange())
    }

    componentWillUnmount() {
        // remove change listener
        cityStore.removeChangeListener(() => this.onChange())
    }

    onNextCity() {
        // dispatch NEXT_CITY action
        dispatcher.dispatch({
            actionType: ActionTypes.NEXT_CITY
        })
    }

    onChange() {
        // set component state
        this.setState({
            currentCity: cityStore.getSelectedCity()
        })
    }

    render() {
        return (
            <div className="App">
                <h1>{this.state.currentCity}</h1>
                <button onClick={() => this.onNextCity()}>Next City</button>
            </div>
        );
    }

}

export default App;