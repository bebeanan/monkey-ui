'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _select = require('../select');

var _select2 = _interopRequireDefault(_select);

var _rcSelect = require('rc-select');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

;

var AutoComplete = function (_React$Component) {
    _inherits(AutoComplete, _React$Component);

    function AutoComplete() {
        _classCallCheck(this, AutoComplete);

        return _possibleConstructorReturn(this, (AutoComplete.__proto__ || Object.getPrototypeOf(AutoComplete)).apply(this, arguments));
    }

    _createClass(AutoComplete, [{
        key: 'render',
        value: function render() {
            var _classNames;

            var _props = this.props,
                size = _props.size,
                _props$className = _props.className,
                className = _props$className === undefined ? '' : _props$className,
                notFoundContent = _props.notFoundContent,
                prefixCls = _props.prefixCls,
                optionLabelProp = _props.optionLabelProp,
                dataSource = _props.dataSource,
                children = _props.children;


            var cls = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, prefixCls + '-lg', size === 'large'), _defineProperty(_classNames, prefixCls + '-sm', size === 'small'), _defineProperty(_classNames, className, !!className), _defineProperty(_classNames, prefixCls + '-show-search', true), _classNames));

            var options = children || (dataSource ? dataSource.map(function (item) {
                switch (typeof item === 'undefined' ? 'undefined' : _typeof(item)) {
                    case 'string':
                        return _react2.default.createElement(
                            _rcSelect.Option,
                            { key: item },
                            item
                        );
                    case 'object':
                        return _react2.default.createElement(
                            _rcSelect.Option,
                            { key: item.value },
                            item.text
                        );
                    default:
                        throw new Error('AutoComplete[dataSource] only supports type `string[] | Object[]`.');
                }
            }) : []);

            return _react2.default.createElement(
                _select2.default,
                _extends({}, this.props, {
                    className: cls,
                    optionLabelProp: optionLabelProp,
                    combobox: true,
                    notFoundContent: notFoundContent }),
                options
            );
        }
    }]);

    return AutoComplete;
}(_react2.default.Component);

AutoComplete.Option = _rcSelect.Option;
AutoComplete.OptGroup = _rcSelect.OptGroup;
AutoComplete.defaultProps = {
    prefixCls: 'ant-select',
    transitionName: 'slide-up',
    optionLabelProp: 'children',
    choiceTransitionName: 'zoom',
    showSearch: false
};
AutoComplete.contextTypes = {
    antLocale: _react2.default.PropTypes.object
};
exports.default = AutoComplete;