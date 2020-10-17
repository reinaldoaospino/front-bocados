import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/home/home.page';
import Header from './components/header/header.component';
import ShopPage from './pages/shop/shop.page';
import Footer from './components/footer/footer.component';
import ContactPage from './pages/contact/contact.page';
import AboutPage from './pages/about/about.page';
import ProductPage from './pages/product/product.page';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Switch>
          <Route exact path='/front-bocados' component={HomePage} />
          <Route path='/front-bocados/shop' component={ShopPage} />
          <Route path='/front-bocados/contact' component={ContactPage} />
          <Route path='/front-bocados/about' component={AboutPage} />
          <Route path='/front-bocados/product' component={ProductPage} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
