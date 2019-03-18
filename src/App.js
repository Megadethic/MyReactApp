import React, {Component} from 'react';
import classes from './App.css';
import Person from './Person/Person';
import ValidationText from './ValidationText/ValidationText';
import Char from './Char/Char';

class App extends Component {
    state = {
        persons: [
            {id: 'qwe', name: 'Pasha'},
            {id: 'asd', name: 'Dima'},
            {id: 'zxc', name: 'Sveta'},
            {id: 'rty', name: 'Alex'},
            {id: 'fgh', name: 'Anton'}
        ],
        showPersons: false,
        text: ''
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

    changeTextHandler = event => {
        this.setState({text: event.target.value})
    };

    removeCharHandler = (index) => {
        let text = this.state.text.slice(0, index) + this.state.text.slice(++index);
        this.setState({text: text})
    };

    render() {
        let persons = null;

        if (this.state.showPersons) {
            persons = this.state.persons.map(person => {
                return <Person
                    key={person.id}
                    name={person.name}
                    changeNameHandler={event => this.changeNameHandler(event, person.id)}/>
            });
        }

        let chars = this.state.text.split('').map((c, index) => {
            return <Char key={index}
                                  charElement={c}
                                  removeHandler={this.removeCharHandler.bind(this, index)}/>
        });

        return (
            <div className={classes.App}>
                <h1>Learning</h1>
                <button onClick={this.showPersons}>Show Persons</button>
                {persons}
                <br/>
                <br/>

                <input onChange={event => this.changeTextHandler(event)}/>
                <p>{this.state.text}</p>
                <ValidationText textLength={this.state.text.length}/>

                {chars}
            </div>
        );
    }
}

export default App;
