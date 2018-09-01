import { INCREMENT, DECREMENT, UPDATE_STAMP } from './actions'
import { combineReducers } from 'redux'

export const count = (count = 0, { type, payload }) => {
  switch(type) {
    case INCREMENT: 
      return count + payload
    case DECREMENT: 
      return count - payload
    default: return count
  }
}

export function getNowHourMinSecond () {
  let now = (new Date())
  let stamp = [now.getHours(), now.getMinutes(), now.getSeconds()]
  return stamp.join(':')
}

export const lastUpdateAt = (lastUpdateAt = getNowHourMinSecond(), { type }) => {
  switch(type) {
    case UPDATE_STAMP:
      return getNowHourMinSecond()
    default:
      return lastUpdateAt
  }
}

export default combineReducers({
  count,
  lastUpdateAt
})