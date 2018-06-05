import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form';
import locationReducer from './location'
import apiReducers from '../api/api'
import homeReducer from '../routes/Home/module/Home'
import productsReducer from '../routes/ProductsPage/module/Products'
import productDetailReducer from '../routes/ProductDetailPage/module/ProductDetail'
import selectAddressReducer from '../routes/SelectAddress/module/SelectAddress'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    api: apiReducers,
    home: homeReducer,
    products: productsReducer,
    productDetail: productDetailReducer,
    form: formReducer,
    selectAddress: selectAddressReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
