import { combineReducers } from 'redux';
import languageReducer from './language';
import loaderReducer from './loader';

export default combineReducers({
    language:languageReducer,
    loader:loaderReducer
})

