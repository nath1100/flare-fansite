import React from 'react';
import Header from './components/Header';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Media from './pages/media';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/media">
          <Media />
        </Route>
      </Switch>
      <p>This is some text</p>
    </div>
  );
}

export default App;
