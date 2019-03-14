import React from 'react'

const person = (props) => {
    return <div className="Person">
        My name is {props.name}!<br/>
        <input onChange={props.changeNameHandler}/>
    </div>
};

export default person;
