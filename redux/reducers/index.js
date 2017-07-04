
import { combineReducers } from 'redux';
import { navReducer } from '../../navigation/AppNavigation'
import AuthReducer from './AuthReducer'

const AppReducer = combineReducers({
   nav:navReducer,
   auth:AuthReducer
})

export default AppReducer;
