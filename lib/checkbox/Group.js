'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _shallowequal = require('shallowequal');

var _shallowequal2 = _interopRequireDefault(_shallowequal);

var _checkbox = require('./checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _reactAddonsPureRenderMixin = require('react-addons-pure-render-mixin');

var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CheckboxGroup = function (_React$Component) {
  _inherits(CheckboxGroup, _React$Component);

  function CheckboxGroup(props) {
    _classCallCheck(this, CheckboxGroup);

    var _this = _possibleConstructorReturn(this, (CheckboxGroup.__proto__ || Object.getPrototypeOf(CheckboxGroup)).call(this, props));

    _this.toggleOption = function (option) {
      var optionIndex = _this.state.value.indexOf(option.value);
      var value = [].concat(_toConsumableArray(_this.state.value));
      if (optionIndex === -1) {
        value.push(option.value);
      } else {
        value.splice(optionIndex, 1);
      }
      if (!('value' in _this.props)) {
        _this.setState({ value: value });
      }
      var onChange = _this.props.onChange;
      if (onChange) {
        onChange(value);
      }
    };

    _this.state = {
      value: props.value || props.defaultValue || []
    };
    return _this;
  }

  _createClass(CheckboxGroup, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        checkboxGroup: {
          toggleOption: this.toggleOption,
          value: this.state.value,
          disabled: this.props.disabled
        }
      };
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if ('value' in nextProps) {
        this.setState({
          value: nextProps.value || []
        });
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return !(0, _shallowequal2.default)(this.props, nextProps) || !(0, _shallowequal2.default)(this.state, nextState);
    }
  }, {
    key: 'getOptions',
    value: function getOptions() {
      var options = this.props.options;

      return options.map(function (option) {
        if (typeof option === 'string') {
          return {
            label: option,
            value: option
          };
        }
        return option;
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var props = this.props,
          state = this.state;
      var prefixCls = props.prefixCls,
          className = props.className,
          style = props.style,
          options = props.options;

      var children = props.children;
      if (options && options.length > 0) {
        children = this.getOptions().map(function (option) {
          return _react2.default.createElement(
            _checkbox2.default,
            {
              key: option.value,
              disabled: 'disabled' in option ? option.disabled : props.disabled,
              value: option.value,
              checked: state.value.indexOf(option.value) !== -1,
              onChange: function onChange() {
                return _this2.toggleOption(option);
              },
              className: prefixCls + '-item'
            },
            option.label
          );
        });
      }
      var classString = (0, _classnames2.default)(prefixCls, className);
      return _react2.default.createElement(
        'div',
        { className: classString, style: style },
        children
      );
    }
  }]);

  return CheckboxGroup;
}(_react2.default.Component);

CheckboxGroup.defaultProps = {
  options: [],
  prefixCls: 'ant-checkbox-group'
};
CheckboxGroup.propTypes = {
  defaultValue: _propTypes2.default.array,
  value: _propTypes2.default.array,
  options: _propTypes2.default.array.isRequired,
  onChange: _propTypes2.default.func
};
CheckboxGroup.childContextTypes = {
  checkboxGroup: _propTypes2.default.any
};
exports.default = CheckboxGroup;