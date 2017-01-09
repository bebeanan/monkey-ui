'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _calculateNodeHeight = require('./calculateNodeHeight');

var _calculateNodeHeight2 = _interopRequireDefault(_calculateNodeHeight);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _object = require('object.omit');

var _object2 = _interopRequireDefault(_object);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function fixControlledValue(value) {
  if (typeof value === 'undefined' || value === null) {
    return '';
  }
  return value;
}

function onNextFrame(cb) {
  if (window.requestAnimationFrame) {
    return window.requestAnimationFrame(cb);
  }
  return window.setTimeout(cb, 1);
}

function clearNextFrameAction(nextFrameId) {
  if (window.cancelAnimationFrame) {
    window.cancelAnimationFrame(nextFrameId);
  } else {
    window.clearTimeout(nextFrameId);
  }
}

;

var Input = function (_Component) {
  _inherits(Input, _Component);

  function Input() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Input);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Input.__proto__ || Object.getPrototypeOf(Input)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      textareaStyles: null,
      isFocus: false
    }, _this.handleFocus = function (e) {
      var onFocus = _this.props.onFocus;

      _this.setState({
        isFocus: true
      });
      if (onFocus) {
        onFocus(e);
      }
    }, _this.handleBlur = function (e) {
      var onBlur = _this.props.onBlur;

      _this.setState({
        isFocus: false
      });
      if (onBlur) {
        onBlur(e);
      }
    }, _this.handleKeyDown = function (e) {
      var _this$props = _this.props,
          onPressEnter = _this$props.onPressEnter,
          onKeyDown = _this$props.onKeyDown;

      if (e.keyCode === 13 && onPressEnter) {
        onPressEnter(e);
      }
      if (onKeyDown) {
        onKeyDown(e);
      }
    }, _this.handleTextareaChange = function (e) {
      if (!('value' in _this.props)) {
        _this.resizeTextarea();
      }
      var onChange = _this.props.onChange;
      if (onChange) {
        onChange(e);
      }
    }, _this.resizeTextarea = function () {
      var _this$props2 = _this.props,
          type = _this$props2.type,
          autosize = _this$props2.autosize;

      if (type !== 'textarea' || !autosize || !_this.refs.input) {
        return;
      }
      var minRows = autosize ? autosize.minRows : null;
      var maxRows = autosize ? autosize.maxRows : null;
      var textareaStyles = (0, _calculateNodeHeight2.default)(_this.refs.input, false, minRows, maxRows);
      _this.setState({ textareaStyles: textareaStyles });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Input, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.resizeTextarea();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      // Re-render with the new content then recalculate the height as required.
      if (this.props.value !== nextProps.value) {
        if (this.nextFrameActionId) {
          clearNextFrameAction(this.nextFrameActionId);
        }
        this.nextFrameActionId = onNextFrame(this.resizeTextarea);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var props = this.props,
          state = this.state,
          refs = this.refs;

      var preHasPresuffix = prevProps.prefix || prevProps.suffix;
      var curHasPresuffix = props.prefix || props.suffix;
      if (state.isFocus && preHasPresuffix !== curHasPresuffix) {
        refs.input.focus();
      }
    }
  }, {
    key: 'focus',
    value: function focus() {
      this.refs.input.focus();
    }
  }, {
    key: 'renderLabeledInput',
    value: function renderLabeledInput(children) {
      var _classNames;

      var props = this.props;

      // Not wrap when there is not addons
      if (props.type === 'textarea' || !props.addonBefore && !props.addonAfter) {
        return children;
      }

      var wrapperClassName = props.prefixCls + '-group';
      var addonClassName = wrapperClassName + '-addon';
      var addonBefore = props.addonBefore ? _react2.default.createElement(
        'span',
        { className: addonClassName },
        props.addonBefore
      ) : null;

      var addonAfter = props.addonAfter ? _react2.default.createElement(
        'span',
        { className: addonClassName },
        props.addonAfter
      ) : null;

      var className = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, props.prefixCls + '-wrapper', true), _defineProperty(_classNames, wrapperClassName, addonBefore || addonAfter), _classNames));

      return _react2.default.createElement(
        'span',
        { className: className },
        addonBefore,
        children,
        addonAfter
      );
    }
  }, {
    key: 'renderLabeledIcon',
    value: function renderLabeledIcon(children) {
      var props = this.props;


      if (props.type === 'textarea' || !props.prefix && !props.suffix) {
        return children;
      }

      var prefix = props.prefix ? _react2.default.createElement(
        'span',
        { className: props.prefixCls + '-prefix' },
        props.prefix
      ) : null;
      var suffix = props.suffix ? _react2.default.createElement(
        'span',
        { className: props.prefixCls + '-suffix' },
        props.suffix
      ) : null;
      return _react2.default.createElement(
        'span',
        { className: props.prefixCls + '-preSuffix-wrapper' },
        prefix,
        children,
        suffix
      );
    }
  }, {
    key: 'renderInput',
    value: function renderInput() {
      var _classNames2;

      var props = (0, _objectAssign2.default)({}, this.props);
      // Fix https://fb.me/react-unknown-prop
      var otherProps = (0, _object2.default)(this.props, ['prefixCls', 'onPressEnter', 'autosize', 'addonBefore', 'addonAfter', 'prefix', 'suffix']);
      var prefixCls = props.prefixCls;
      if (!props.type) {
        return props.children;
      }
      var inputClassName = (0, _classnames2.default)(prefixCls, (_classNames2 = {}, _defineProperty(_classNames2, prefixCls + '-sm', props.size === 'small'), _defineProperty(_classNames2, prefixCls + '-lg', props.size === 'large'), _classNames2), props.className);
      if ('value' in props) {
        otherProps.value = fixControlledValue(props.value);
        // Input elements must be either controlled or uncontrolled,
        // specify either the value prop, or the defaultValue prop, but not both.
        delete otherProps.defaultValue;
      }
      switch (props.type) {
        case 'textarea':
          return _react2.default.createElement('textarea', _extends({}, otherProps, {
            style: (0, _objectAssign2.default)({}, props.style, this.state.textareaStyles),
            className: inputClassName,
            onKeyDown: this.handleKeyDown,
            onChange: this.handleTextareaChange,
            ref: 'input'
          }));
        default:
          return this.renderLabeledIcon(_react2.default.createElement('input', _extends({}, otherProps, {
            className: inputClassName,
            onKeyDown: this.handleKeyDown,
            onFocus: this.handleFocus,
            onBlur: this.handleBlur,
            ref: 'input'
          })));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.renderLabeledInput(this.renderInput());
    }
  }]);

  return Input;
}(_react.Component);

Input.defaultProps = {
  disabled: false,
  prefixCls: 'ant-input',
  type: 'text',
  autosize: false
};
Input.propTypes = {
  type: _react.PropTypes.string,
  id: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  size: _react.PropTypes.oneOf(['small', 'default', 'large']),
  disabled: _react.PropTypes.bool,
  value: _react.PropTypes.any,
  defaultValue: _react.PropTypes.any,
  className: _react.PropTypes.string,
  addonBefore: _react.PropTypes.node,
  addonAfter: _react.PropTypes.node,
  prefixCls: _react.PropTypes.string,
  autosize: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.object]),
  onPressEnter: _react.PropTypes.func,
  onKeyDown: _react.PropTypes.func,
  onFocus: _react.PropTypes.func,
  onBlur: _react.PropTypes.func,
  prefix: _react.PropTypes.node,
  suffix: _react.PropTypes.node
};
exports.default = Input;