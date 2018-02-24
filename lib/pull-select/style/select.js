'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactMotion = require('react-motion');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var classNames = require('classnames');

var noop = function noop() {};

var PullSelect = function (_Component) {
    _inherits(PullSelect, _Component);

    function PullSelect(props, context) {
        _classCallCheck(this, PullSelect);

        var _this = _possibleConstructorReturn(this, (PullSelect.__proto__ || Object.getPrototypeOf(PullSelect)).call(this, props, context));

        _this.animate = function () {
            var length = _this.props.children.length;
            var stander = _this.props.height ? _this.props.height : 38;
            var top = stander * length;
            _this.setState(function (state) {
                return { height: state.height === stander ? top : stander, pullType: !state.pullType };
            });
        };

        _this.state = {
            pullTop: true,
            pullType: true,
            value: '',
            text: '',
            height: _this.props.height ? _this.props.height : 38
        };
        return _this;
    }

    _createClass(PullSelect, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {}
    }, {
        key: 'click',
        value: function click(event) {
            event = event || window.event;
            var _props = this.props,
                onChange = _props.onChange,
                noReturn = _props.noReturn,
                onSelect = _props.onSelect;
            var _event$target = event.target,
                nodeName = _event$target.nodeName,
                value = _event$target.value,
                innerText = _event$target.innerText;

            nodeName = nodeName.toLowerCase();
            onChange = onChange ? onChange : noop;
            onSelect = onSelect ? onSelect : noop;
            if (nodeName === 'div') {
                this.animate();
            } else if (nodeName === 'li') {
                /**
                 * 是否回填默认值
                 */
                if (noReturn) {
                    onSelect();
                    this.animate();
                    return;
                }
                //回填 && 两次选中不一样
                if (value != this.state.value) {
                    onChange(value);
                    onSelect(value);
                    this.animate();
                    this.setState({ value: value, text: innerText });
                } else {
                    onSelect(value);
                    this.animate();
                    return;
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _state = this.state,
                pullTop = _state.pullTop,
                pullType = _state.pullType,
                text = _state.text;
            var _props2 = this.props,
                value = _props2.value,
                defaultValue = _props2.defaultValue,
                defautText = _props2.defautText,
                conBoderColor = _props2.conBoderColor,
                conTextColor = _props2.conTextColor,
                conHeight = _props2.conHeight,
                conIconColor = _props2.conIconColor,
                dropSpeed = _props2.dropSpeed,
                top = _props2.top,
                onChange = _props2.onChange,
                onSelect = _props2.onSelect,
                noReturn = _props2.noReturn,
                disabled = _props2.disabled,
                pullTextColor = _props2.pullTextColor,
                pullBorderColor = _props2.pullBorderColor,
                iconColor = _props2.iconColor,
                fontSize = _props2.fontSize,
                width = _props2.width;


            width = width ? width : '250';
            /**
             * 默认文案
             */
            value = defautText ? defautText : text;

            var warpClass = classNames("special-warp", {
                "arrow-up": pullType,
                "arrow-down": !pullType
            });
            return _react2.default.createElement(
                'div',
                { className: warpClass,
                    onClick: function onClick(e) {
                        return _this2.click(e);
                    } },
                _react2.default.createElement(
                    _reactMotion.Motion,
                    { style: { height: (0, _reactMotion.spring)(this.state.height) } },
                    function (_ref) {
                        var height = _ref.height;
                        return _react2.default.createElement(
                            'div',
                            { style: Object.assign({}, { height: height, width: width }) },
                            _this2.props.children
                        );
                    }
                )
            );
        }
    }]);

    return PullSelect;
}(_react.Component);

exports.default = PullSelect;