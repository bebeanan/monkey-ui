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

var _reactAddonsPureRenderMixin = require('react-addons-pure-render-mixin');

var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

var _row = require('../layout/row');

var _row2 = _interopRequireDefault(_row);

var _col = require('../layout/col');

var _col2 = _interopRequireDefault(_col);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormItem = function (_React$Component) {
  _inherits(FormItem, _React$Component);

  function FormItem() {
    _classCallCheck(this, FormItem);

    return _possibleConstructorReturn(this, (FormItem.__proto__ || Object.getPrototypeOf(FormItem)).apply(this, arguments));
  }

  _createClass(FormItem, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _reactAddonsPureRenderMixin2.default.shouldComponentUpdate.apply(this, args);
    }
  }, {
    key: 'getHelpMsg',
    value: function getHelpMsg() {
      var context = this.context;
      var props = this.props;
      if (props.help === undefined && context.form) {
        return this.getId() ? (context.form.getFieldError(this.getId()) || []).join(', ') : '';
      }

      return props.help;
    }
  }, {
    key: 'getOnlyControl',
    value: function getOnlyControl() {
      var children = _react2.default.Children.toArray(this.props.children);
      var child = children.filter(function (c) {
        return c.props && _constants.FIELD_META_PROP in c.props;
      })[0];
      return child !== undefined ? child : null;
    }
  }, {
    key: 'getChildProp',
    value: function getChildProp(prop) {
      var child = this.getOnlyControl();
      return child && child.props && child.props[prop];
    }
  }, {
    key: 'getId',
    value: function getId() {
      return this.getChildProp('id');
    }
  }, {
    key: 'getMeta',
    value: function getMeta() {
      return this.getChildProp(_constants.FIELD_META_PROP);
    }
  }, {
    key: 'renderHelp',
    value: function renderHelp() {
      var prefixCls = this.props.prefixCls;
      var help = this.getHelpMsg();
      return help ? _react2.default.createElement(
        'div',
        { className: prefixCls + '-explain', key: 'help' },
        help
      ) : null;
    }
  }, {
    key: 'renderExtra',
    value: function renderExtra() {
      var _props = this.props,
          prefixCls = _props.prefixCls,
          extra = _props.extra;

      return extra ? _react2.default.createElement(
        'span',
        { className: prefixCls + '-extra' },
        extra
      ) : null;
    }
  }, {
    key: 'getValidateStatus',
    value: function getValidateStatus() {
      var _context$form = this.context.form,
          isFieldValidating = _context$form.isFieldValidating,
          getFieldError = _context$form.getFieldError,
          getFieldValue = _context$form.getFieldValue;

      var field = this.getId();
      if (!field) {
        return '';
      }
      if (isFieldValidating(field)) {
        return 'validating';
      } else if (!!getFieldError(field)) {
        return 'error';
      } else if (getFieldValue(field) !== undefined) {
        return 'success';
      }
      return '';
    }
  }, {
    key: 'renderValidateWrapper',
    value: function renderValidateWrapper(c1, c2, c3) {
      var classes = '';
      var form = this.context.form;
      var props = this.props;
      var validateStatus = props.validateStatus === undefined && form ? this.getValidateStatus() : props.validateStatus;

      if (validateStatus) {
        classes = (0, _classnames2.default)({
          'has-feedback': props.hasFeedback,
          'has-success': validateStatus === 'success',
          'has-warning': validateStatus === 'warning',
          'has-error': validateStatus === 'error',
          'is-validating': validateStatus === 'validating'
        });
      }
      return _react2.default.createElement(
        'div',
        { className: this.props.prefixCls + '-item-control ' + classes },
        c1,
        c2,
        c3
      );
    }
  }, {
    key: 'renderWrapper',
    value: function renderWrapper(children) {
      var wrapperCol = this.props.wrapperCol;
      return _react2.default.createElement(
        _col2.default,
        _extends({}, wrapperCol, { key: 'wrapper' }),
        children
      );
    }
  }, {
    key: 'isRequired',
    value: function isRequired() {
      if (this.context.form) {
        var meta = this.getMeta() || {};
        var validate = meta.validate || [];

        return validate.filter(function (item) {
          return !!item.rules;
        }).some(function (item) {
          return item.rules.some(function (rule) {
            return rule.required;
          });
        });
      }
      return false;
    }
  }, {
    key: 'renderLabel',
    value: function renderLabel() {
      var props = this.props;
      var labelCol = props.labelCol;
      var required = props.required === undefined ? this.isRequired() : props.required;

      var className = (0, _classnames2.default)(_defineProperty({}, props.prefixCls + '-item-required', required));

      // remove user input colon
      var label = props.label;
      if (typeof label === 'string' && label.trim() !== '') {
        label = props.label.replace(/[：|:]\s*$/, '');
      }

      return props.label ? _react2.default.createElement(
        _col2.default,
        _extends({}, labelCol, { key: 'label', className: props.prefixCls + '-item-label' }),
        _react2.default.createElement(
          'label',
          { htmlFor: props.id || this.getId(), className: className },
          label
        )
      ) : null;
    }
  }, {
    key: 'renderChildren',
    value: function renderChildren() {
      var props = this.props;
      var children = _react2.default.Children.map(props.children, function (child) {
        if (child && typeof child.type === 'function' && !child.props.size) {
          return _react2.default.cloneElement(child, { size: 'large' });
        }
        return child;
      });
      return [this.renderLabel(), this.renderWrapper(this.renderValidateWrapper(children, this.renderHelp(), this.renderExtra()))];
    }
  }, {
    key: 'renderFormItem',
    value: function renderFormItem(children) {
      var _itemClassName;

      var props = this.props;
      var prefixCls = props.prefixCls;
      var style = props.style;
      var itemClassName = (_itemClassName = {}, _defineProperty(_itemClassName, prefixCls + '-item', true), _defineProperty(_itemClassName, prefixCls + '-item-with-help', !!this.getHelpMsg()), _defineProperty(_itemClassName, '' + props.className, !!props.className), _itemClassName);

      return _react2.default.createElement(
        _row2.default,
        { className: (0, _classnames2.default)(itemClassName), style: style },
        children
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.renderChildren();
      return this.renderFormItem(children);
    }
  }]);

  return FormItem;
}(_react2.default.Component);

FormItem.defaultProps = {
  hasFeedback: false,
  prefixCls: 'ant-form'
};
FormItem.propTypes = {
  prefixCls: _react2.default.PropTypes.string,
  label: _react2.default.PropTypes.node,
  labelCol: _react2.default.PropTypes.object,
  help: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.node, _react2.default.PropTypes.bool]),
  validateStatus: _react2.default.PropTypes.oneOf(['', 'success', 'warning', 'error', 'validating']),
  hasFeedback: _react2.default.PropTypes.bool,
  wrapperCol: _react2.default.PropTypes.object,
  className: _react2.default.PropTypes.string,
  id: _react2.default.PropTypes.string,
  children: _react2.default.PropTypes.node
};
FormItem.contextTypes = {
  form: _react2.default.PropTypes.object
};
exports.default = FormItem;