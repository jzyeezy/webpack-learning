'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = todos;

var _todoActions = require('../actions/todoActions');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function todos() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
    var action = arguments[1];

    switch (action.type) {
        case _todoActions.ADD_TODO:
            return [].concat(_toConsumableArray(state), [{
                text: action.text,
                completed: false
            }]);
        case _todoActions.COMPLETE_TODO:
            return [].concat(_toConsumableArray(state.slice(0, action.index)), [Object.assign({}, state[action.index], {
                completed: true
            })], _toConsumableArray(state.slice(action.index + 1)));
        default:
            return state;
    }
}

//# sourceMappingURL=todosReducer-compiled.js.map