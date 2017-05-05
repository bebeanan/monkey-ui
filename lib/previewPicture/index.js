'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('../modal/index');

var _index2 = _interopRequireDefault(_index);

var _viewPic = require('./viewPic');

var _viewPic2 = _interopRequireDefault(_viewPic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //容器
/*
*
接口设计
参数设计：
visible  //modal hide show
viewData  //图片列表数据
删除图片接口设计
//动态渲染左侧缩略图 and 同时删除外层上传数据和显示数据 and 删除按钮设计
//点击左侧缩略图左侧对应大图展示
// 阻止删除和展示事件传递和冒泡，防止预览触发删除，或删除触发预览
//bug 修复 upload组件删除事件会触发预览事件
*/


var getFileList = function getFileList() {
  return {
    type: '标题',
    url: '',
    uid: '',
    thumbUrl: ''
  };
};

var noop = function noop() {};

var Container = function (_React$Component) {
  _inherits(Container, _React$Component);

  function Container(props) {
    _classCallCheck(this, Container);

    var _this = _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).call(this, props));

    _this.state = {
      visible: false,
      fileList: _this.props.fileList,
      width: _this.props.width ? _this.props.width : "1000px", //模态框宽度
      top: _this.props.top ? _this.props.top : '100px', //模态框距离顶部高度
      title: _this.props.title
    };
    return _this;
  }

  _createClass(Container, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({ visible: nextProps.visible, fileList: nextProps.fileList });
    }
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
    key: 'hideModal',
    value: function hideModal() {
      this.setState({ visible: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var props = {
        delFlag: this.props.delFlag,
        del: this.props.del ? this.props.del : noop,
        fileList: this.props.fileList
      };
      var fileList = this.state.fileList;
      return _react2.default.createElement(
        _index2.default,
        {
          title: this.state.title,
          visible: this.state.visible,
          footer: null,
          width: this.state.width,
          style: { top: this.state.top },
          onCancel: function onCancel() {
            return _this2.hideModal();
          }

        },
        _react2.default.createElement(_viewPic2.default, props)
      );
    }
  }]);

  return Container;
}(_react2.default.Component);

;

module.exports = Container;