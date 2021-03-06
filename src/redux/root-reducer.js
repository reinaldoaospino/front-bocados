import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import productReducer from './product/product.reducer';
import fetchingReducer from './fetching/fetching.reducer';
import categoryReducer from './category/category.reducer';
import cartRecuder from './cart/cart.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
};

const rootReducer = combineReducers({
    product: productReducer,
    fetching: fetchingReducer,
    category: categoryReducer,
    cart: cartRecuder
})

export default persistReducer(persistConfig, rootReducer);