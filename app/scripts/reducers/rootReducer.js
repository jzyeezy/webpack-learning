/**
 * Created by Joyce on 12/6/2015.
 */

import { combineReducers } from 'redux';

import visibilityFilter from './filterReducer';
import todos from './todosReducer';

const rootReducer = combineReducers({
    visibilityFilter,
    todos
});

export default rootReducer;
