import React, {Component} from 'react';
import classes from './App.css';
import Chars from '../Chars/Chars';
import Persons from '../Persons/Persons';
import ValidationText from '../ValidationText/ValidationText';

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

    shouldComponentUpdate( nextProps, nextState, nextContext )
    {
        console.log( "App.shouldComponentUpdate" );

        return true;
    }

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
        return (
            <div className={classes.App}>
                <h1>Learning</h1>
                <button onClick={this.showPersons}>Show Persons</button>
                {this.state.showPersons
                    ? <Persons persons={this.state.persons}
                               personsLength={this.state.persons.length}
                               changeHandler={this.changeNameHandler}/>
                    : null}
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
