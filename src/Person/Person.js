import React from 'react'

const person = (props) => {
    return <div onClick={props.click}>
        My name is {props.name}! {props.children}
    </div>
};

export default person;
