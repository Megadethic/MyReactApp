import React, {Component} from 'react';
import './App.css';
import './Person/Person.css';
import Person from './Person/Person.js';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
    state = {
        persons: [
            {name: 'Pasha', note: 'I am a developer of this project.'},
            {name: 'Anton', note: ''}
        ],
        username: "mepasha"
    };

    changeNameHandler = (event) => {
        this.setState({
                persons: [
                    {name: 'Pasha', note: 'I am a developer of this project.'},
                    {name: event.target.value, note: 'just me'}
                ]
            }
        );
    };

    changeUserName = (event) => {
        this.setState({username: event.target.value});
    };

    render() {
        return (
            <div className="App">
                <h1>Learning</h1>
                <button onClick={this.changeNameHandler}>Change name</button>
                <Person name={this.state.persons[0].name}>
                    {this.state.persons[0].note}
                </Person>
                <Person name={this.state.persons[1].name}
                        change={this.changeNameHandler}>
                    {this.state.persons[1].note}
                </Person>

                <UserInput change={this.changeUserName}
                           name={this.state.username}/>
                <UserOutput name={this.state.username}/>
            </div>
        );
    }
}

export default App;
