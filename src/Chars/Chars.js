import React, { useEffect } from 'react';
import Char from "../Char/Char";

const Chars = ( props ) => {
  useEffect(() => {
    console.log("Chars.useEffect");
  }, [props.text]);

  return props.text
      .split( '' )
      .map( ( c, index ) => {
        return <Char key={index}
                     charElement={c}
                     removeHandler={props.removeHandler.bind(this, index)}/>
      } );
};

export default Chars;
