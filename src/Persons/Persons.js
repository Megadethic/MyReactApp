import React, {PureComponent} from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
    render() {
        console.log('Persons.render');

        return this.props.persons.map(person => {
            return <Person
                id={person.id}
                key={person.id}
                name={person.name}
                changePersonBackgroundColor={person.changePersonBackgroundColor}
                changeHandler={event => this.props.changeHandler(event, person.id)}/>
        })
    }
}

export default Persons;
