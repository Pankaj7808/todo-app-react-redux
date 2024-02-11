// Importing the combineReducers function from Redux
import { combineReducers } from 'redux'

import {completeReducer} from './CompleteReducer'
import {taskReducer} from './TaskReducer'


const rootReducer = combineReducers({
    completeReducer,
    taskReducer
})

// Exporting the combined reducer
export default rootReducer
