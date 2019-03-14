import React, {Component} from 'react';
import './App.css';
import './Person/Person.css';
import Person from './Person/Person.js';

class App extends Component {
    state = {
        persons: [
            {id: 'qwe', name: 'Pasha'},
            {id: 'asd', name: 'Dima'},
            {id: 'zxc', name: 'Sveta'},
            {id: 'rty', name: 'Alex'},
            {id: 'fgh', name: 'Anton'}
        ],
        showPersons: false
    };

    changeNameHandler = (event, personId) => {
        const personIndex = this.state.persons.findIndex(p => p.id === personId);
        const person = {...this.state.persons[personIndex]};
        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;
        this.setState({persons: persons});
    };

    showPersons = () => {
        this.setState({showPersons: !this.state.showPersons})
    };

    render() {
        let persons = null;

        if (this.state.showPersons) {
            persons = this.state.persons.map(person => {
                return <Person
                    key={person.id}
                    name={person.name}
                    changeNameHandler={(event) => this.changeNameHandler(event, person.id)}/>
            });
        }

        return (
            <div className="App">
                <h1>Learning</h1>
                <button onClick={this.showPersons}>Show Persons</button>
                {persons}

            </div>
        );
    }
}

export default App;
