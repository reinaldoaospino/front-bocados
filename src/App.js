import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './pages/home/home.component';
import Header from './components/header/header.component';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Redirect from='/front-bocados' to='/'/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
