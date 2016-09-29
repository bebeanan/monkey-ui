'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _reactAddonsPureRenderMixin = require('react-addons-pure-render-mixin');

var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CheckboxGroup = function (_React$Component) {
  _inherits(CheckboxGroup, _React$Component);

  function CheckboxGroup(props) {
    _classCallCheck(this, CheckboxGroup);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CheckboxGroup).call(this, props));

    _initialiseProps.call(_this);

    var value = void 0;
    if ('value' in props) {
      value = props.value || [];
    } else if ('defaultValue' in props) {
      value = props.defaultValue || [];
    }
    _this.state = { value: value };
    return _this;
  }

  _createClass(CheckboxGroup, [{
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
    value: function shouldComponentUpdate() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _reactAddonsPureRenderMixin2.default.shouldComponentUpdate.apply(this, args);
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

      var options = this.getOptions();
      return React.createElement(
        'div',
        { className: 'ant-checkbox-group' },
        options.map(function (option) {
          return React.createElement(
            _index2.default,
            { disabled: 'disabled' in option ? option.disabled : _this2.props.disabled,
              checked: _this2.state.value.indexOf(option.value) !== -1,
              onChange: function onChange() {
                return _this2.toggleOption(option);
              },
              className: 'ant-checkbox-group-item', key: option.value
            },
            option.label
          );
        })
      );
    }
  }]);

  return CheckboxGroup;
}(React.Component);

CheckboxGroup.defaultProps = {
  options: [],
  defaultValue: [],
  onChange: function onChange() {}
};
CheckboxGroup.propTypes = {
  defaultValue: React.PropTypes.array,
  value: React.PropTypes.array,
  options: React.PropTypes.array.isRequired,
  onChange: React.PropTypes.func
};

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.toggleOption = function (option) {
    var optionIndex = _this3.state.value.indexOf(option.value);
    var value = [].concat(_toConsumableArray(_this3.state.value));
    if (optionIndex === -1) {
      value.push(option.value);
    } else {
      value.splice(optionIndex, 1);
    }
    if (!('value' in _this3.props)) {
      _this3.setState({ value: value });
    }
    _this3.props.onChange(value);
  };
};

exports.default = CheckboxGroup;