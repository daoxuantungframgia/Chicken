import * as API from '../../../api/api'

const GET_PRODUCTS = 'GET_PRODUCTS'

export const getProducts = (categoryId) => (dispatch) => {
  API.get({
    url: `/api/public/product/${categoryId}`
  }).then((response) => {
    if (response) {
      dispatch({
        type: GET_PRODUCTS,
        products: response
      })
    }
  })
}

const INITIAL_STATE = {}

const ACTION_HANDLER = {
  [GET_PRODUCTS]: (state, action) => ({ ...state, products: action.products })
}

export default function productsReducer (state = INITIAL_STATE, action) {
  const handler = ACTION_HANDLER[action.type]
  return handler ? handler(state, action) : state
}
