'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Row = function (_React$Component) {
	_inherits(Row, _React$Component);

	function Row() {
		_classCallCheck(this, Row);

		return _possibleConstructorReturn(this, (Row.__proto__ || Object.getPrototypeOf(Row)).apply(this, arguments));
	}

	_createClass(Row, [{
		key: 'render',
		value: function render() {
			var _classNames;

			var _props = this.props,
			    type = _props.type,
			    justify = _props.justify,
			    align = _props.align,
			    className = _props.className,
			    gutter = _props.gutter,
			    style = _props.style,
			    children = _props.children;

			var classes = (0, _classnames2.default)((_classNames = {
				'ant-row': !type
			}, _defineProperty(_classNames, 'ant-row-' + type, type), _defineProperty(_classNames, 'ant-row-' + type + '-' + justify, justify), _defineProperty(_classNames, 'ant-row-' + type + '-' + align, align), _defineProperty(_classNames, className, className), _classNames));
			var rowStyle = gutter > 0 ? {
				marginLeft: gutter / -2,
				marginRight: gutter / -2
			} : style;
			var cols = _react.Children.map(children, function (col) {
				if (!col) return null;

				return (0, _react.cloneElement)(col, {
					style: gutter > 0 ? {
						paddingLeft: gutter / 2,
						paddingRight: gutter / 2
					} : col.props.style
				});
			});
			return _react2.default.createElement(
				'div',
				{ className: classes, style: rowStyle },
				cols
			);
		}
	}]);

	return Row;
}(_react2.default.Component);

exports.default = Row;


Row.propTypes = {
	type: _react2.default.PropTypes.string,
	align: _react2.default.PropTypes.string,
	justify: _react2.default.PropTypes.string,
	className: _react2.default.PropTypes.string,
	children: _react2.default.PropTypes.node,
	gutter: _react2.default.PropTypes.number
};