'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = filterReducer;

var _filterActions = require('../actions/filterActions');

function filterReducer() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? 'SHOW_ALL' : arguments[0];
    var action = arguments[1];

    switch (action.type) {
        case _filterActions.SET_FILTER:
            return action.filter;
        default:
            return state;
    }
} /**
   * Created by Joyce on 12/6/2015.
   */

//# sourceMappingURL=filterReducer-compiled.js.map