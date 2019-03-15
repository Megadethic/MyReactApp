import React from 'react';

const userInput = props => {
    return <div>
        <input onChange={props.change} type='text' placeholder='Change Username'/><br/>
        <div>{props.name}</div>
    </div>
};

export default userInput;