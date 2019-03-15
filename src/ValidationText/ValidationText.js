import React from 'react';
import './ValidationText.css';

const ValidationText = props => {
    return <div className='TextValidationMessage'>
        {
            props.textLength < 5 ? 'Text too short' : ( props.textLength > 10 ? 'Text too long' : '')
        }
    </div>
};

export default ValidationText;