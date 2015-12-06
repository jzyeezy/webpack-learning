/**
 * Created by Joyce on 12/6/2015.
 */
import {SET_FILTER} from '../actions/filterActions'

export default function filterReducer (state = 'SHOW_ALL', action){
    switch (action.type){
        case SET_FILTER:
            return action.filter;
        default:
            return state;
    }
}