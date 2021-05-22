import React, {Suspense, useEffect,useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Loader from './components/Loader';
import LazyForm from './components/LazyForm';
import Home from './components/Home';

function App() {

  return (
    <Router>
        <Suspense fallback={<Loader />}>
        
        <Switch>
          <Route exact path="/" component={LazyForm} />
          <Route exact path="/home" component={Home} />
        </Switch>
        
        </Suspense>
    </Router>
      
  );
}

export default App;
