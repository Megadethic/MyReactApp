import React from 'react'

const person = (props) => {
    return <div className="Person">
        My name is {props.name}! {props.children}<br/>
        <input onChange={props.change}/>
    </div>
};

export default person;
