/**
 * Created by Joyce on 12/6/2015.
 */
export const ADD_TODO = "ADD_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";

export function addTodo(text){
    return {
        type: ADD_TODO,
        text
    }
}

export function completeTodo(index){
    return {
        type: COMPLETE_TODO,
        index
    }
}

export default { addTodo, completeTodo }