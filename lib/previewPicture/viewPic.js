'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _col = require('../layout/col');

var _col2 = _interopRequireDefault(_col);

var _row = require('../layout/row');

var _row2 = _interopRequireDefault(_row);

var _index = require('../icon/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //预览


var ViewPic = function (_React$Component) {
  _inherits(ViewPic, _React$Component);

  function ViewPic(props) {
    _classCallCheck(this, ViewPic);

    var _this = _possibleConstructorReturn(this, (ViewPic.__proto__ || Object.getPrototypeOf(ViewPic)).call(this, props));

    _this.props.fileList[0].active = true;
    _this.state = {
      fileList: _this.props.fileList,
      rightUrl: _this.props.fileList.length == 0 ? "" : _this.props.fileList[0].url
    };
    return _this;
  }

  _createClass(ViewPic, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {

      nextProps.fileList[0].active = true;
      this.setState({ fileList: nextProps.fileList });
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var deg = 0;
      document.getElementById("rotate").onclick = function () {
        deg += 90;
        document.getElementById("bigImg").style.transform = "rotate(" + deg + "deg)";
      };
    }
  }, {
    key: 'changeUrl',
    value: function changeUrl(id) {
      this.setState({ rightUrl: "" });
      this.setState({ rightUrl: this.leftToRight(id) });
    }
  }, {
    key: 'leftToRight',
    value: function leftToRight(id) {
      var fileList = this.state.fileList;
      var _id = "";
      for (var i = 0; i < fileList.length; i++) {
        if (fileList[i].uid == id) {
          fileList[i].active = true;
          _id = fileList[i].url;
        } else fileList[i].active = false;
      }
      this.setState({ fileList: this.state.fileList });
      return _id;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var fileList = this.state.fileList;
      var delFlag = this.props.delFlag || 'block';
      return _react2.default.createElement(
        _row2.default,
        null,
        _react2.default.createElement(
          _col2.default,
          { span: 4 },
          _react2.default.createElement(
            'div',
            { className: 'leftNav' },
            _react2.default.createElement(
              'ul',
              { style: { height: '100%', overflowY: 'auto' } },
              fileList.length != 0 ? this.state.fileList.map(function (item, index) {
                return _react2.default.createElement(
                  'li',
                  { key: item.uid, onClick: function onClick() {
                      return _this2.changeUrl(item.uid);
                    } },
                  _react2.default.createElement('img', {
                    style: { border: item.active ? "2px solid red" : "2px solid #108ee9" },
                    src: item.thumbUrl }),
                  _react2.default.createElement(
                    'span',
                    { style: { display: delFlag },
                      onClick: function onClick(e) {
                        return _this2.props.del(e, item.uid);
                      } },
                    '\xD7'
                  )
                );
              }) : null
            )
          )
        ),
        _react2.default.createElement(
          _col2.default,
          { span: 20 },
          _react2.default.createElement(
            'div',
            { className: 'picContainer' },
            _react2.default.createElement(
              'div',
              { id: 'rotate' },
              _react2.default.createElement(_index2.default, { type: 'retweet' }),
              '\u65CB\u8F6C'
            ),
            _react2.default.createElement('img', { src: this.state.rightUrl, id: 'bigImg' })
          )
        )
      );
    }
  }]);

  return ViewPic;
}(_react2.default.Component);

;

module.exports = ViewPic;