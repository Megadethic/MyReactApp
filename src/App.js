import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
    state = {
        persons: [
            {name: 'Pasha', note: 'I am a developer of this project.'},
            {name: 'Anton', note: ''}
        ]
    };

    changeNameHandler = (newName) => {
        this.setState({
                persons: [
                    {name: 'Pasha', note: 'I am a developer of this project.'},
                    {name: newName, note: 'just me'}
                ]
            }
        );
    };

    render() {
        return (
            <div className="App">
                <h1>Learning</h1>
                <button onClick={this.changeNameHandler}>Change name</button>
                <Person name={this.state.persons[0].name}>
                    {this.state.persons[0].note}
                </Person>
                <Person name={this.state.persons[1].name} click={this.changeNameHandler.bind(this, 'Dimma')}>
                    {this.state.persons[1].note}
                </Person>
            </div>
        );
    }
}

export default App;
