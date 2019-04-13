import React, {Component} from 'react';
import classes from './App.css';
import Chars from '../Chars/Chars';
import Persons from '../Persons/Persons';
import ValidationText from '../ValidationText/ValidationText';
import PersonContext from '../context/person-context';

class App extends Component {
    state = {
        persons: [
            {id: 'qwe', name: 'Pasha', changePersonBackgroundColor: false},
            {id: 'asd', name: 'Dima', changePersonBackgroundColor: false},
            {id: 'zxc', name: 'Sveta', changePersonBackgroundColor: false},
            {id: 'rty', name: 'Alex', changePersonBackgroundColor: false},
            {id: 'fgh', name: 'Anton', changePersonBackgroundColor: false}
        ],
        showPersons: false,
        text: ''
    };

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("App.shouldComponentUpdate");

        return true;
    }

    changeNameHandler = (event, personId) => {
        const person = this.getPersonById(personId);
        person.name = event.target.value;
        this.replacePersonById(person);
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

    changePersonBackgroundColorHandler = (personId) => {
        const person = this.getPersonById(personId);
        person.changePersonBackgroundColor = !person.changePersonBackgroundColor;
        this.replacePersonById(person);
    };

    getPersonById = (personId) => {
        const personIndex = this.state.persons.findIndex( p => p.id === personId);
        return {...this.state.persons[personIndex]};
    };

    replacePersonById = (person) => {
        const personIndex = this.state.persons.findIndex( p => p.id === person.id);
        const persons = [...this.state.persons];
        persons[personIndex] = person;
        this.setState({persons: persons});
    };

    render() {
        let persons = null;

        if (this.state.showPersons) {
            persons = <Persons persons={this.state.persons}
                               personsLength={this.state.persons.length}
                               changeHandler={this.changeNameHandler}/>
        }

        return (
            <div className={classes.App}>
                <h1>Learning</h1>
                <button onClick={this.showPersons}>Show Persons</button>
                <PersonContext.Provider
                    value={{
                        changeBackgroundHandler: this.changePersonBackgroundColorHandler
                    }}>
                    {persons}
                </PersonContext.Provider>
                <br/>
                <br/>

                <input onChange={event => this.changeTextHandler(event)}/>
                <p>{this.state.text}</p>
                <ValidationText textLength={this.state.text.length}/>
                <Chars text={this.state.text} removeHandler={this.removeCharHandler}/>
            </div>
        );
    }
}

export default App;
