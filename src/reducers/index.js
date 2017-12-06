import { handleActions } from 'redux-actions'
import userReducer from './userReducer'
import _ from 'lodash'

import {STATE} from 'CONST'
const has = {...userReducer}

_.each(has, (item, index) => {
  has[index] = {
    next: item,
    throw: (state, {payload}) =>
      ({...state, Toast: payload.reason || payload.message})
  }
})

export default handleActions(has, STATE)
