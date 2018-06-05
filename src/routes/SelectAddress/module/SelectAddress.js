import * as API from 'api/api'
import { getUser } from 'utils/storage'
import bootbox from 'bootbox'

const GET_ADDRESSES_SUCCESS = 'GET_ADDRESSES_SUCCESS'
const SELECT_ADDRESS = 'SELECT_ADDRESS'

export const getAddresses = () => (dispatch) => {
  const user = getUser()
  API.get({
    url: `/api/private/users/profiles/${user.userId}`
  }).then((response) => {
    if (response) {
      dispatch({
        type: GET_ADDRESSES_SUCCESS,
        addresses: response
      })
    }
  })
}

export const selectAddress = (address) => (dispatch) => {
  dispatch({
    type: SELECT_ADDRESS,
    selectedAddress: address
  })
}

export const updateAddress = (address) => (dispatch) => {
  return API.post({
    url: '/api/private/users/profiles',
    data: address
  }).then(response => {
    if (response) {
      if (!address.userProfileId) {
        dispatch(getAddresses())
      }
      dispatch(API.setNotification({
        notification: {
          success: {
            message: 'Bạn đã update địa chỉ thành công'
          }
        }
      }))
    }
  })
}

export const deleteAddress = (address) => (dispatch) => {
  bootbox.confirm('Bạn có chắc chắn muốn xoá địa chỉ này?', (result) => {
    if (result) {
      API.deleteData({
        url: `/api/private/users/profiles/${address.userProfileId}`
      })
    }
  })
}

const INITIAL_STATE = {

}

const ACTION_HANDLERS = {
  [GET_ADDRESSES_SUCCESS]: (state, action) => ({ ...state, addresses: action.addresses }),
  [SELECT_ADDRESS]: (state, action) => ({ ...state, selectedAddress: action.selectedAddress })
}

export default function selectAddressReducer (state = INITIAL_STATE, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
