import React, { useEffect } from 'react';
import classes from './Char.css';

const Char = props => {
    useEffect( () => {
        console.log("Char.useEffect");

        return () => {
            console.log("Char.useEffect.cleanUp");
        }
    } );

    return <div className={classes.Char} onClick={props.removeHandler}>{props.charElement}</div>
};

export default Char;
