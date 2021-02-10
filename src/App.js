import React, { useEffect } from 'react';
import './App.style.js';
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
import { createStructuredSelector } from 'reselect';
import { selectIsFetching } from './redux/fetching/fetching.selector';
import { CircularProgress } from '@material-ui/core';
import { SpinnerContainer } from './App.style.js';
import { selectProductCollection } from './redux/product/product.selector.js';
import CheckOutpage from './pages/check-out/check-out.page.jsx';

function App({ fetchGetProdutcStart, isFeching, productsCollection }) {
  useEffect(() => {
    fetchGetProdutcStart();
  }, [ fetchGetProdutcStart ]);

  return isFeching ? (
    <SpinnerContainer className="App">
      <CircularProgress />
    </SpinnerContainer>
  ) : <div style={{ position: 'relative' }} >
      <Header />
      <div className="content">
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' render={(rest) => <ShopPage productsCollection={productsCollection} {...rest} />} />
          <Route path='/contact' component={ContactPage} />
          <Route path='/about' component={AboutPage} />
          <Route path='/product/:productId' component={ProductPage} />
          <Route path='/check-in' component={CheckOutpage} />
        </Switch>
      </div>
      <Footer />
    </div>;
}

const mapstateToProps = createStructuredSelector({
  isFeching: selectIsFetching,
  productsCollection: selectProductCollection,
})

const mapDispatchToProps = (dispatch) => ({
  fetchGetProdutcStart: () => dispatch(fetchGetProdutcStart()),
});

export default connect(mapstateToProps, mapDispatchToProps)(App);
