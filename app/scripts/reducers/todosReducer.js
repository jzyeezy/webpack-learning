import {ADD_TODO, COMPLETE_TODO} from '../actions/todoActions'

export default function todos(state = {todos: []}, action){
    switch(action.type){
        case ADD_TODO:
            var todos = [...state.todos, {text: action.text, completed: false}];//state.todos.splice();
            return Object.assign({}, state, {todos});
            //return [
            //    ...state,
            //    {
            //        text: action.text,
            //        completed: false
            //    }
            //];
        case COMPLETE_TODO:
            var todos = [
                    ...state.todos.slice(0, action.index),
                    Object.assign({}, state.todos[action.index], {
                        completed: !state.todos[action.index].completed
                    }),
                    ...state.todos.slice(action.index + 1)
                ];
            //todos[action.index].completed = !todos[action.index].completed;
            return Object.assign({}, state, {todos});
            //return [
            //    ...state.slice(0, action.index),
            //    Object.assign({}, state[action.index], {
            //        completed: !state[action.index].completed
            //    }),
            //    ...state.slice(action.index + 1)
            //];
        default:
            return state
    }
}