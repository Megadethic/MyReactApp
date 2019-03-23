import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {
    render() {
        return this.props.persons.map(person => {
            return <Person
                key={person.id}
                name={person.name}
                changeHandler={event => this.props.changeHandler(event, person.id)}/>
        })
    }
}

export default Persons;
