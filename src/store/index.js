import { 
  createStore,
  combineReducers
} from 'redux'

import UserReducer from '@/reducers/UserReducer.js'

const reducers = combineReducers({
  'user': UserReducer
})

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
