import React, {useEffect} from 'react';
import classes from './Person.css';

const person = props => {
  useEffect( () => {
    console.log("Person.useEffect");
  }, [props.name] );

  return <div className={classes.Person}>
    My name is {props.name}!<br/>
    <input onChange={props.changeHandler}/>
  </div>
};

export default person;
