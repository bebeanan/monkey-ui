'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var stringOrNumber = _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]);
var objectOrNumber = _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.number]);

var Col = function (_React$Component) {
	_inherits(Col, _React$Component);

	function Col(props) {
		_classCallCheck(this, Col);

		var _this = _possibleConstructorReturn(this, (Col.__proto__ || Object.getPrototypeOf(Col)).call(this, props));

		_this.props = props;
		return _this;
	}

	_createClass(Col, [{
		key: 'render',
		value: function render() {
			var _extends3;

			var props = this.props;

			var _props = this.props,
			    span = _props.span,
			    order = _props.order,
			    offset = _props.offset,
			    push = _props.push,
			    pull = _props.pull,
			    className = _props.className,
			    children = _props.children,
			    others = _objectWithoutProperties(_props, ['span', 'order', 'offset', 'push', 'pull', 'className', 'children']);

			var sizeClassObj = {};

			['xs', 'sm', 'md', 'lg'].forEach(function (size) {
				var _extends2;

				var sizeProps = {};
				if (typeof props[size] === 'number') {
					sizeProps.span = props[size];
				} else if (_typeof(props[size]) === 'object') {
					sizeProps = props[size] || {};
				}
				sizeClassObj = _extends({}, sizeClassObj, (_extends2 = {}, _defineProperty(_extends2, 'ant-col-' + size + '-' + sizeProps.span, sizeProps.span !== undefined), _defineProperty(_extends2, 'ant-col-' + size + '-order-' + sizeProps.order, sizeProps.order), _defineProperty(_extends2, 'ant-col-' + size + '-offset-' + sizeProps.offset, sizeProps.offset), _defineProperty(_extends2, 'ant-col-' + size + '-push-' + sizeProps.push, sizeProps.push), _defineProperty(_extends2, 'ant-col-' + size + '-pull-' + sizeProps.pull, sizeProps.pull), _extends2));
			});

			var classes = (0, _classnames2.default)(_extends((_extends3 = {}, _defineProperty(_extends3, 'ant-col-' + span, span !== undefined), _defineProperty(_extends3, 'ant-col-order-' + order, order), _defineProperty(_extends3, 'ant-col-offset-' + offset, offset), _defineProperty(_extends3, 'ant-col-push-' + push, push), _defineProperty(_extends3, 'ant-col-pull-' + pull, pull), _defineProperty(_extends3, className, !!className), _extends3), sizeClassObj));

			return _react2.default.createElement(
				'div',
				_extends({}, others, { className: classes }),
				children
			);
		}
	}]);

	return Col;
}(_react2.default.Component);

exports.default = Col;


Col.propTypes = {
	span: stringOrNumber,
	order: stringOrNumber,
	offset: stringOrNumber,
	push: stringOrNumber,
	pull: stringOrNumber,
	className: _react.PropTypes.string,
	children: _react.PropTypes.node,
	xs: objectOrNumber,
	sm: objectOrNumber,
	md: objectOrNumber,
	lg: objectOrNumber
};