import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/home/home.page';
import Header from './components/header/header.component';
import ShopPage from './pages/shop/shop.page';
import Footer from './components/footer/footer.component';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Switch>
          <Route exact path='/front-bocados' component={HomePage} />
          <Route path='/front-bocados/shop' component={ShopPage} />
        </Switch>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
