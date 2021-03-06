import * as API from '../../../api/api'

const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES'
const GET_HOT_DEAL = 'GET_HOT_DEAL'

const getAllCategories = () => (dispatch) => {
  API.get({
    url: '/api/public/categoryType',
  }).then(response => {
    if (response) {
      dispatch({
        type: GET_ALL_CATEGORIES,
        categories: response
      })
    }
  })
}

export const getHotDeals = () => (dispatch) => {
  API.get({
    url: '/api/public/hotdeal'
  }).then(response => {
    if (response) {
      dispatch({
        type: GET_HOT_DEAL,
        hotDeals: response
      })
    }
  })
}

export const initialHomePage = () => (dispatch) => {
  dispatch(getAllCategories())
  dispatch(getHotDeals())
}

const INITIAL_STATE = {

}

const ACTION_HANDLER = {
  [GET_ALL_CATEGORIES]: (state, action) => ({ ...state, categories: action.categories }),
  [GET_HOT_DEAL]: (state, action) => ({ ...state, hotDeals: action.hotDeals })
}

export default function homeReducer (state = INITIAL_STATE, action) {
  const handler = ACTION_HANDLER[action.type]
  return handler ? handler(state, action) : state
}
