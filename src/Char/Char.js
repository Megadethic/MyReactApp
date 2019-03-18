import React from 'react';
import classes from './Char.css';

const Char = props => {
    return <div className={classes.Char} onClick={props.removeHandler}>{props.charElement}</div>
};

export default Char;
