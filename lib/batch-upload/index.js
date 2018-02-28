'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('../loading/index');

var _index2 = _interopRequireDefault(_index);

var _picItems = require('./picItems');

var _picItems2 = _interopRequireDefault(_picItems);

var _index3 = require('../icon/index');

var _index4 = _interopRequireDefault(_index3);

var _index5 = require('../button/index');

var _index6 = _interopRequireDefault(_index5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   previewpic 预览图片
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   removepic 删除图片
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   fileList 图片列表
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
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

var UploadPic = function (_React$Component) {
  _inherits(UploadPic, _React$Component);

  function UploadPic(props) {
    _classCallCheck(this, UploadPic);

    var _this = _possibleConstructorReturn(this, (UploadPic.__proto__ || Object.getPrototypeOf(UploadPic)).call(this, props));

    _this.state = {
      length: 0,
      index: 0,
      loading: 'hide',
      loadingText: ''
    };
    return _this;
  }

  _createClass(UploadPic, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      // if('fileList' in nextProps){
      //     this.setState({fileList:nextProps.fileList});
      // }
    }
  }, {
    key: 'setFileObj',
    value: function setFileObj(data, index) {
      var obj = {};
      obj.file_id = data.file_id;
      obj.status = 'done';
      obj.fileLength = this.state.length;
      obj.index = index ? index : undefined;
      return obj;
    }
  }, {
    key: '_change',
    value: function _change(e) {
      var _this2 = this;

      var files = e.target.files;
      var length = files.length;
      var index = 0;
      this.props.onChange ? this.props.onChange(files) : noop();
      this.setState({ length: length });
      //loading组件初始化
      this.setLoadingComponent(1, length, 'init');
      //追加文件数据    
      for (var i = 0; i < length; i++) {

        this.upload_ajax(files[i]).then(function (data) {
          _this2.props.onSuccess ? _this2.props.onSuccess(data, _this2.setFileObj(data.data, ++index)) : noop();
          _this2.setLoadingComponent(index, length);
        }).catch(function (error) {
          alert(error);_this2.setState({ loading: 'hide' });
        });
      }
      //清空input value
      e.target.value = "";
    }
  }, {
    key: 'setLoadingComponent',
    value: function setLoadingComponent(index, length, type) {
      var _this3 = this;

      var str = '';
      var stateObj = this.state;
      stateObj.loading = 'show';
      stateObj.loadingText = '上传中' + index + '/' + length + '...';
      this.setState(stateObj);

      if (index == length && type != 'init') {
        setTimeout(function () {
          stateObj.loading = 'hide';
          _this3.setState(stateObj);
        }, 500);
      }
    }
  }, {
    key: 'onChange',
    value: function onChange(e) {
      var checkd = e.target.checked;
      var MyStorage = [sessionStorage, localStorage];
      var index = this.props.MyStorage ? this.props.MyStorage : 0;
      var _MyStorage = MyStorage[index];
    }
  }, {
    key: 'submit',
    value: function submit() {
      return true;
    }
  }, {
    key: 'cancel',
    value: function cancel() {
      return false;
    }
  }, {
    key: 'info',
    value: function info() {
      var _this4 = this;

      Modal.confirm({
        title: '注意！',
        content: _react2.default.createElement(
          Checkbox,
          { onChange: function onChange(e) {
              return _this4.onChange(e);
            } },
          '\u4EE5\u540E\u4E0D\u518D\u63D0\u9192'
        ),
        okText: "确定",
        cancelText: "取消",
        onOk: function onOk() {
          return _this4.submit();
        },
        onCancel: function onCancel() {
          return _this4.cancel();
        }
      });
    }
  }, {
    key: 'upload_ajax',
    value: function upload_ajax(file) {
      var _this5 = this;

      /*
          需要用原生xhr发送请求，不依赖于jquery
      */
      var formData = new FormData();
      formData.append("file", file);
      return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest(); //第一步
        xhr.open('POST', _this5.props.uploadUrl); //第二步骤    
        //发送请求    
        xhr.send(formData); //第三步骤    
        //ajax返回    
        xhr.onreadystatechange = function () {
          //第四步    
          if (xhr.readyState == 4 && xhr.status == 200) {
            var data = xhr.responseText;
            data = JSON.parse(data);
            data.result == 'success' ? resolve(data) : reject(data.reason);
          }
        };
        //设置超时时间    
        xhr.timeout = 20000;
        xhr.ontimeout = function (event) {
          // 　　　　alert('请求超时！');    
          reject('上传超时！');
        };
      });
    }
  }, {
    key: 'upClick',
    value: function upClick(e) {
      e.preventDefault();
      var inputFile = this.refs.inputFile;
      inputFile.click();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this6 = this;

      //是否多选
      var multiple = this.props.multiple ? this.props.multiple : false;
      //接受图片类型
      var accept = this.props.accept ? this.props.accept : "";

      var loadingProps = {
        loading: this.state.loading,
        text: this.state.loadingText
      };

      var inputFileProps = {
        multiple: multiple,
        accept: accept
      };

      var picListProps = {
        fileList: this.props.fileList,
        preivewPic: this.props.preivewPic ? this.props.preivewPic : noop,
        removePic: this.props.removePic ? this.props.removePic : noop
      };
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_index2.default, loadingProps),
        _react2.default.createElement(
          _index6.default,
          { type: 'default', onClick: function onClick(e) {
              return _this6.upClick(e);
            }, icon: 'upload' },
          '\u4E0A\u4F20'
        ),
        _react2.default.createElement('input', _extends({ type: 'file'
        }, inputFileProps, {
          ref: 'inputFile',
          onChange: function onChange(e) {
            return _this6._change(e);
          },
          style: { display: 'none' } })),
        _react2.default.createElement(_picItems2.default, picListProps)
      );
    }
  }]);

  return UploadPic;
}(_react2.default.Component);

module.exports = UploadPic;