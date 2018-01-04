'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcTree = require('rc-tree');

var _rcTree2 = _interopRequireDefault(_rcTree);

var _openAnimation = require('../_util/openAnimation');

var _openAnimation2 = _interopRequireDefault(_openAnimation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tree = function (_React$Component) {
  _inherits(Tree, _React$Component);

  function Tree() {
    _classCallCheck(this, Tree);

    return _possibleConstructorReturn(this, (Tree.__proto__ || Object.getPrototypeOf(Tree)).apply(this, arguments));
  }

  _createClass(Tree, [{
    key: 'render',
    value: function render() {
      var props = this.props;
      var prefixCls = props.prefixCls,
          className = props.className;

      var checkable = props.checkable;
      return _react2.default.createElement(
        _rcTree2.default,
        _extends({}, props, {
          className: className,
          checkable: checkable ? _react2.default.createElement('span', { className: prefixCls + '-checkbox-inner' }) : checkable
        }),
        this.props.children
      );
    }
  }]);

  return Tree;
}(_react2.default.Component);

Tree.TreeNode = _rcTree.TreeNode;
Tree.defaultProps = {
  prefixCls: 'ant-tree',
  checkable: false,
  showIcon: false,
  openAnimation: _openAnimation2.default
};
exports.default = Tree;