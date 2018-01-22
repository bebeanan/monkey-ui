'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //loading组件


/**
  参数说明：

  text:text存在显示文字,无text属性隐藏,
  loading:show 显示；hide 隐藏
  
*/
var Loading = function (_React$Component) {
  _inherits(Loading, _React$Component);

  function Loading(props) {
    _classCallCheck(this, Loading);

    var _this = _possibleConstructorReturn(this, (Loading.__proto__ || Object.getPrototypeOf(Loading)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(Loading, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {}
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'render',
    value: function render() {
      var loadingText = this.props.text ? this.props.text : '';
      var coverSee = this.props.cover ? this.props.cover : 'none';
      var loading = this.props.loading;
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('div', { className: 'cover', style: { display: loading == 'show' ? 'block' : 'none' } }),
        _react2.default.createElement(
          'div',
          { className: "spinner " + this.props.loading, style: { left: '50%', top: '34%' } },
          _react2.default.createElement(
            'div',
            { className: 'spinner-container container1' },
            _react2.default.createElement('div', { className: 'circle1' }),
            _react2.default.createElement('div', { className: 'circle2' }),
            _react2.default.createElement('div', { className: 'circle3' }),
            _react2.default.createElement('div', { className: 'circle4' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'spinner-container container2' },
            _react2.default.createElement('div', { className: 'circle1' }),
            _react2.default.createElement('div', { className: 'circle2' }),
            _react2.default.createElement('div', { className: 'circle3' }),
            _react2.default.createElement('div', { className: 'circle4' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'spinner-container container3' },
            _react2.default.createElement('div', { className: 'circle1' }),
            _react2.default.createElement('div', { className: 'circle2' }),
            _react2.default.createElement('div', { className: 'circle3' }),
            _react2.default.createElement('div', { className: 'circle4' })
          ),
          _react2.default.createElement(
            'div',
            { className: '', style: { 'position': 'absolute', 'display': 'block', 'top': '46px', 'left': '-9px', 'color': '#108ee9', 'width': '80px' } },
            loadingText
          )
        )
      );
    }
  }]);

  return Loading;
}(_react2.default.Component);

;

exports.default = Loading;