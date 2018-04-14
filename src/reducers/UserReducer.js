import { Map } from 'immutable'

const _user = new Map()

const userUpdate = (state, action) => {
  return state
}

const User = (state = _user, action) => {
  switch (action.type) {
    case 'USER_UPDATE':
      return userUpdate(state, action)
    default:
      return state
  }
}

export default User
