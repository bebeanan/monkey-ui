'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcTreeSelect = require('rc-tree-select');

var _rcTreeSelect2 = _interopRequireDefault(_rcTreeSelect);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TreeSelect = function (_React$Component) {
  _inherits(TreeSelect, _React$Component);

  function TreeSelect() {
    _classCallCheck(this, TreeSelect);

    return _possibleConstructorReturn(this, (TreeSelect.__proto__ || Object.getPrototypeOf(TreeSelect)).apply(this, arguments));
  }

  _createClass(TreeSelect, [{
    key: 'render',
    value: function render() {
      var _classNames;

      var props = this.props;
      var _props = this.props,
          size = _props.size,
          className = _props.className,
          combobox = _props.combobox,
          notFoundContent = _props.notFoundContent,
          prefixCls = _props.prefixCls;


      var cls = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, prefixCls + '-lg', size === 'large'), _defineProperty(_classNames, prefixCls + '-sm', size === 'small'), _defineProperty(_classNames, className, !!className), _classNames));

      var antLocale = this.context.antLocale;

      if (antLocale && antLocale.Select) {
        notFoundContent = notFoundContent || antLocale.Select.notFoundContent;
      }

      if (combobox) {
        notFoundContent = null;
      }

      var checkable = props.treeCheckable;
      if (checkable) {
        checkable = _react2.default.createElement('span', { className: prefixCls + '-tree-checkbox-inner' });
      }

      return _react2.default.createElement(_rcTreeSelect2.default, _extends({}, this.props, {
        treeCheckable: checkable,
        className: cls,
        notFoundContent: notFoundContent
      }));
    }
  }]);

  return TreeSelect;
}(_react2.default.Component);

TreeSelect.TreeNode = _rcTreeSelect.TreeNode;
TreeSelect.SHOW_ALL = _rcTreeSelect.SHOW_ALL;
TreeSelect.SHOW_PARENT = _rcTreeSelect.SHOW_PARENT;
TreeSelect.SHOW_CHILD = _rcTreeSelect.SHOW_CHILD;
TreeSelect.defaultProps = {
  prefixCls: 'ant-select',
  transitionName: 'slide-up',
  choiceTransitionName: 'zoom',
  showSearch: false,
  dropdownClassName: 'ant-select-tree-dropdown'
};
TreeSelect.contextTypes = {
  antLocale: _react2.default.PropTypes.object
};
exports.default = TreeSelect;