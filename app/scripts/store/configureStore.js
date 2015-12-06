/**
 * Created by Joyce on 12/6/2015.
 */
import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers/rootReducer'

export default function configureStore(){
    return createStore(rootReducer);
}