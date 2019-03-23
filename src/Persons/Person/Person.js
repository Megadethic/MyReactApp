import React from 'react';
import classes from './Person.css';

const person = props => {
    return <div className={classes.Person}>
        My name is {props.name}!<br/>
        <input onChange={props.changeHandler}/>
    </div>
};

export default person;
