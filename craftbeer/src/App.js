import React from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home'
import ListBeers from './components/ListBeers'
import RandomBeer from './components/RandomBeer'
import NewBeer from './components/NewBeer'
import SingleBeer from './components/SingleBeer'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/ListBeers' component={ListBeers} />
        <Route path='/ListBeers/:id' component={SingleBeer} />
        <Route exact path='/RandomBeer' component={RandomBeer} />
        <Route exact path='/NewBeer' component={NewBeer} />
      </Switch>
    </div>
  );
}

export default App;

