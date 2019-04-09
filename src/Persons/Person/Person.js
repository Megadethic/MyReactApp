import React, {useEffect, useRef} from 'react';
import classes from './Person.css';

const person = props => {
  const personRef = useRef(null);

  useEffect( () => {
    console.log("Person.useEffect");
    personRef.current.focus();
  }, [props.name] );

  return (
      <div className={classes.Person}>
          My name is {props.name}!<br/>
          <input onChange={props.changeHandler} ref={personRef}/>
      </div>
  )
};

export default person;
