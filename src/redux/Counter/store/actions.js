export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const UPDATE_STAMP = 'UPDATE_STAMP'

export function add (payload = 1) {
  return dispatch => {
    dispatch({
      type: INCREMENT,
      payload
    })
    dispatch({
      type: UPDATE_STAMP
    })
  }
}

export function minus (payload = 1) {
  return dispatch => {
    dispatch({
      type: DECREMENT,
      payload
    })
    dispatch({
      type: UPDATE_STAMP
    })
  }
}
