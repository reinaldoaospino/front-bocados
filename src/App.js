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
import { CheckInpage } from './pages/check-in/check-in.page.jsx';

function App({ fetchGetProdutcStart, isFeching, productsCollection }) {
  useEffect(() => {
    fetchGetProdutcStart();
  }, [fetchGetProdutcStart]);

  return isFeching ? (
    <SpinnerContainer className="App">
      <CircularProgress />
    </SpinnerContainer>
  ) : <div>
      <Header />
      <div className="content">
        <Switch>
          <Route exact path='/front-bocados' component={HomePage} />
          <Route path='/front-bocados/shop' render={(rest) => <ShopPage productsCollection={productsCollection} {...rest} />} />
          <Route path='/front-bocados/contact' component={ContactPage} />
          <Route path='/front-bocados/about' component={AboutPage} />
          <Route path='/front-bocados/product/:productId' component={ProductPage} />
          <Route path='/front-bocados/checkin' component={CheckInpage} />
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
