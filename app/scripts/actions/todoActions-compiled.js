"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.addTodo = addTodo;
exports.completeTodo = completeTodo;
/**
 * Created by Joyce on 12/6/2015.
 */
var ADD_TODO = exports.ADD_TODO = "ADD_TODO";
var COMPLETE_TODO = exports.COMPLETE_TODO = "COMPLETE_TODO";

function addTodo(text) {
    return {
        type: ADD_TODO,
        text: text
    };
}

function completeTodo(index) {
    return {
        type: COMPLETE_TODO,
        index: index
    };
}

exports.default = { addTodo: addTodo, completeTodo: completeTodo };

//# sourceMappingURL=todoActions-compiled.js.map