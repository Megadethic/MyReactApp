import React, {PureComponent} from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
    render() {
        console.log('Persons.render');

        return this.props.persons.map(person => {
            return <Person
                key={person.id}
                name={person.name}
                changeHandler={event => this.props.changeHandler(event, person.id)}/>
        })
    }
}

export default Persons;
