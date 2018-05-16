import * as API from '../../../api/api'

const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES'
const GET_HOT_DEAL = 'GET_HOT_DEAL'

const getAllCategories = () => (dispatch) => {
  API.get({
    url: '/api/homepage/categoryType',
  }).then(response => {
    if (response) {
      dispatch({
        type: GET_ALL_CATEGORIES,
        categories: response
      })
    }
  })
}

const getHotDeal = () => (dispatch) => {
  API.get({
    url: '/api/homepage/hotdeal'
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
  dispatch(getHotDeal())
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
