import * as API from '../../../api/api'
import { getProducts } from '../../ProductsPage/module/Products'

const GET_PRODUCT_DETAIL = 'GET_PRODUCT_DETAIL'

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

export const initialProductDetailPage = ({ productId, promotionId, categoryId }) => (dispatch) => {
  dispatch(getProductDetail({ productId, promotionId }))
  dispatch(getProducts(categoryId))
}

const INITIAL_STATE = {
  product: {}
}

const ACTION_HANDLERS = {
  [GET_PRODUCT_DETAIL]: (state, action) => ({ ...state, product: action.product })
}

export default function productDetailReducer (state = INITIAL_STATE, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
