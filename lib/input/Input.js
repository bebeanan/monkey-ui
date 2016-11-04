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

var Input = function (_Component) {
  _inherits(Input, _Component);

  function Input(props) {
    _classCallCheck(this, Input);

    var _this = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));

    _this.handleKeyDown = function (e) {
      if (e.keyCode === 13) {
        _this.props.onPressEnter(e);
      }
      _this.props.onKeyDown(e);
    };

    _this.handleTextareaChange = function (e) {
      _this.resizeTextarea();
      if (_this.props.onChange) {
        _this.props.onChange(e);
      }
    };

    _this.resizeTextarea = function () {
      var _this$props = _this.props,
          type = _this$props.type,
          autosize = _this$props.autosize;

      if (type !== 'textarea' || !autosize || !_this.refs.input) {
        return;
      }
      var minRows = autosize ? autosize.minRows : null;
      var maxRows = autosize ? autosize.maxRows : null;
      var textareaStyles = (0, _calculateNodeHeight2.default)(_this.refs.input, false, minRows, maxRows);
      _this.setState({ textareaStyles: textareaStyles });
    };

    _this.state = {
      textareaStyles: null
    };
    return _this;
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
    key: 'renderLabledInput',
    value: function renderLabledInput(children) {
      var _classNames;

      var props = this.props;
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
    key: 'renderInput',
    value: function renderInput() {
      var _classNames2;

      var props = _extends({}, this.props);

      // Fix https://fb.me/react-unknown-prop
      var otherProps = (0, _object2.default)(this.props, ['prefixCls', 'onPressEnter', 'autosize', 'addonBefore', 'addonAfter']);

      var prefixCls = props.prefixCls;
      if (!props.type) {
        return props.children;
      }

      var inputClassName = (0, _classnames2.default)((_classNames2 = {}, _defineProperty(_classNames2, prefixCls, true), _defineProperty(_classNames2, prefixCls + '-sm', props.size === 'small'), _defineProperty(_classNames2, prefixCls + '-lg', props.size === 'large'), _defineProperty(_classNames2, props.className, !!props.className), _classNames2));

      if ('value' in props) {
        props.value = fixControlledValue(props.value);
        // Input elements must be either controlled or uncontrolled,
        // specify either the value prop, or the defaultValue prop, but not both.
        delete props.defaultValue;
      }

      switch (props.type) {
        case 'textarea':
          return _react2.default.createElement('textarea', _extends({}, otherProps, {
            style: _extends({}, props.style, this.state.textareaStyles),
            className: inputClassName,
            onKeyDown: this.handleKeyDown,
            onChange: this.handleTextareaChange,
            ref: 'input'
          }));
        default:
          return _react2.default.createElement('input', _extends({}, otherProps, {
            className: inputClassName,
            onKeyDown: this.handleKeyDown,
            ref: 'input'
          }));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.renderLabledInput(this.renderInput());
    }
  }]);

  return Input;
}(_react.Component);

exports.default = Input;


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
  onChange: _react.PropTypes.func
};

Input.defaultProps = {
  disabled: false,
  prefixCls: 'ant-input',
  type: 'text',
  onPressEnter: function onPressEnter() {},
  onKeyDown: function onKeyDown() {},
  onChange: function onChange() {},

  autosize: false
};