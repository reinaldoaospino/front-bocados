import React, { useEffect } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/home/home.page';
import Header from './components/header/header.component';
import ShopPage from './pages/shop/shop.page';
import Footer from './components/footer/footer.component';
import ContactPage from './pages/contact/contact.page';
import AboutPage from './pages/about/about.page';
import ProductPage from './pages/product/product.page';
import { fetchGetProdutcStart } from './redux/product/product.action';
import { connect } from 'react-redux';

function App({fetchGetProdutcStart}) {
  useEffect(() => {
    fetchGetProdutcStart();
  }, [fetchGetProdutcStart]);

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

const mapDispatchToProps = (dispatch) => ({
  fetchGetProdutcStart: () => dispatch(fetchGetProdutcStart()),
});

export default connect(null,mapDispatchToProps)(App);
