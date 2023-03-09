// import { legacy_createStore as createStore } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension';
// import combineReducers from './Reducers/combine';
import { legacy_createStore as createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import favoriteReducer from './Reducers/favorite'

// const store = createStore(combineReducers, composeWithDevTools())
const store = createStore(favoriteReducer, composeWithDevTools())


export default store