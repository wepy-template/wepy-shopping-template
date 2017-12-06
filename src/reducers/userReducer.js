import {ACTION} from 'CONST'
const has = {}

has[ACTION.UPDATEUSER] =
  (state, {payload}) => ({...state, User: {...state.User, ...payload}});

export default has
