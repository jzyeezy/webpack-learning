'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _AddTodo = require('../components/AddTodo');

var _AddTodo2 = _interopRequireDefault(_AddTodo);

var _TodoList = require('../components/TodoList');

var _TodoList2 = _interopRequireDefault(_TodoList);

var _Footer = require('../components/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _todoActions = require('../actions/todoActions');

var _todoActions2 = _interopRequireDefault(_todoActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Joyce on 12/6/2015.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var TodoContainer = (function (_React$Component) {
    _inherits(TodoContainer, _React$Component);

    function TodoContainer() {
        _classCallCheck(this, TodoContainer);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TodoContainer).apply(this, arguments));
    }

    _createClass(TodoContainer, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { id: 'todoContainer' },
                _react2.default.createElement(_AddTodo2.default, null),
                _react2.default.createElement(_TodoList2.default, { todos: this.props.todos }),
                _react2.default.createElement(_Footer2.default, null)
            );
        }
    }]);

    return TodoContainer;
})(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
    return state;
}, _todoActions2.default)(TodoContainer);

//# sourceMappingURL=todoContainer-compiled.js.map