import { combineReducers } from 'redux'
import locationReducer from './location'
import apiReducers from '../api/api'
import homeReducer from '../routes/Home/module/Home'
import productsReducer from '../routes/ProductsPage/module/Products'
import productDetailReducer from '../routes/ProductDetailPage/module/ProductDetail'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    api: apiReducers,
    home: homeReducer,
    products: productsReducer,
    productDetail: productDetailReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
