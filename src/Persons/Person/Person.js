import React, {useEffect, useRef} from 'react';
import classes from './Person.css';
import PersonContext from '../../context/person-context';

const person = props => {
    const personRef = useRef(null);

    useEffect(() => {
        console.log("Person.useEffect");
        personRef.current.focus();
    }, [props.name]);

    return (
        <PersonContext.Consumer>
            {(context) => {
                return <div className={classes.Person + ' ' + ( props.changePersonBackgroundColor ? classes.PersonGreen: classes.PersonBackground )}>
                    My name is {props.name}!<br/>
                    <input onChange={props.changeHandler} ref={personRef}/><br/>
                    <button onClick={context.changeBackgroundHandler.bind(this, props.id)}>Change Color</button>
                </div>
            }}
        </PersonContext.Consumer>
    )
};

export default person;
