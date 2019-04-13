import React from 'react';

const personContext = React.createContext({
    changeBackgroundHandler: () => {}
});

export default personContext;