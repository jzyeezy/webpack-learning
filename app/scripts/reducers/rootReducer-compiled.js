'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _filterReducer = require('./filterReducer');

var _filterReducer2 = _interopRequireDefault(_filterReducer);

var _todosReducer = require('./todosReducer');

var _todosReducer2 = _interopRequireDefault(_todosReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
  filterReducer: _filterReducer2.default,
  todos: _todosReducer2.default
}); /**
     * Created by Joyce on 12/6/2015.
     */

exports.default = rootReducer;

//# sourceMappingURL=rootReducer-compiled.js.map