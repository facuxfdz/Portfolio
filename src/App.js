import React, {Suspense} from 'react';
import Loader from './components/Loader';

const Quiz = React.lazy(() => {
  return new Promise(resolve => setTimeout(resolve, 5 * 1000)).then(
      () => 

          Math.floor(Math.random() * 100) >= 4 
          ? import('./components/Quiz') 
          : null
      ); // Simulate a time to load
  
});

function App() {
  return (
    
      <Suspense fallback={<Loader />}>
        <Quiz />        
      </Suspense>
  );
}

export default App;
