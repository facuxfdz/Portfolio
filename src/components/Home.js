import React from 'react';

const Home = React.lazy(() => {
    return new Promise(resolve => setTimeout(resolve, 5 * 1000)).then(
        () => 

            Math.floor(Math.random() * 100) >= 4 
            ? import('./Show') 
            : Promise.reject(new Error())
        );
    
});
 
export default Home;