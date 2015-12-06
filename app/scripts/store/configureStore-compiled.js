'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = configureStore;

var _redux = require('redux');

var _rootReducer = require('../reducers/rootReducer');

var _rootReducer2 = _interopRequireDefault(_rootReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by Joyce on 12/6/2015.
 */
function configureStore() {
  return (0, _redux.createStore)(_rootReducer2.default);
}

//# sourceMappingURL=configureStore-compiled.js.map