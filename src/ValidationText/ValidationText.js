import React, {useEffect} from 'react';
import classes from './ValidationText.css';

const ValidationText = props => {
  useEffect( () => {
    console.log( "ValidationText.useEffect" );
  }, [props.textLength] );

  return <div className={classes.TextValidationMessage}>
    {
      props.textLength < 5 ? 'Text too short' : (props.textLength > 10 ? 'Text too long' : '')
    }
  </div>
};

export default ValidationText;
