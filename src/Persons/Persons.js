import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {
    shouldComponentUpdate( nextProps, nextState, nextContext )
    {
        const update  = nextProps.persons !== this.props.persons;

        if (update) {
          console.log( "Persons.updated" );
        }

        return update;
    }

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
