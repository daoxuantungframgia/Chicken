import * as API from '../../../api/api'

const GET_PRODUCT_DETAIL = 'GET_PRODUCT_DETAIL'
const GET_RELATIVE_PRODUCTS = 'GET_RELATIVE_PRODUCTS'

const getProductDetail = ({ productId, promotionId }) => (dispatch) => {
  API.get({
    url: `/api/homepage/productDetail/${productId}/${promotionId}`
  }).then(response => {
    if (response) {
      dispatch({
        type: GET_PRODUCT_DETAIL,
        product: response
      })
    }
  })
}

const getRelativeProducts = ({ categoryId, productId }) => (dispatch) => {
  API.get({
    url: `/api/homepage/product/${categoryId}`
  }).then(response => {
    if (response) {
      const relativeProducts = response.filter(product => product.productId !== +productId)
      dispatch({
        type: GET_RELATIVE_PRODUCTS,
        relativeProducts
      })
    }
  })
}

export const initialProductDetailPage = ({ productId, promotionId, categoryId }) => (dispatch) => {
  dispatch(getProductDetail({ productId, promotionId }))
  dispatch(getRelativeProducts({ categoryId, productId }))
}

const INITIAL_STATE = {
  product: {}
}

const ACTION_HANDLERS = {
  [GET_PRODUCT_DETAIL]: (state, action) => ({ ...state, product: action.product }),
  [GET_RELATIVE_PRODUCTS]: (state, action) => ({ ...state, relativeProducts: action.relativeProducts })
}

export default function productDetailReducer (state = INITIAL_STATE, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
