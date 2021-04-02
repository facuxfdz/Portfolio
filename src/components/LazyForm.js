import React from 'react';

const LazyForm = React.lazy(() => {
    return new Promise(resolve => setTimeout(resolve, 5 * 1000)).then(
        () => 
  
            Math.floor(Math.random() * 100) >= 4 
            ? require('./Form1') 
            : null
        ); // Simulate a time to load
    
});

export default LazyForm;