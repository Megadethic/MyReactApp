import React from 'react';
import './Char.css';

const Char = props => {
    return <div className='Char' onClick={props.removeHandler}>{props.charElement}</div>
};

export default Char;