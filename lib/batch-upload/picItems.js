"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PicList = function (_React$Component) {
	_inherits(PicList, _React$Component);

	function PicList(props) {
		_classCallCheck(this, PicList);

		var _this = _possibleConstructorReturn(this, (PicList.__proto__ || Object.getPrototypeOf(PicList)).call(this, props));

		_this.state = {
			// fileList:this.props.fileList?this.props.fileList:[]
		};
		return _this;
	}

	_createClass(PicList, [{
		key: "componentWillReceiveProps",
		value: function componentWillReceiveProps(nextProps) {
			// this.setState({fileList:nextProps.fileList}); 
		}
	}, {
		key: "setPicList",
		value: function setPicList(fileList) {
			var _this2 = this;

			var length = fileList.length;
			if (length == 0) return null;
			var arr = fileList.map(function (item) {
				return _react2.default.createElement(
					"div",
					{ className: "picWarp", key: item.uid },
					_react2.default.createElement(
						"div",
						{ className: "picmi" },
						_react2.default.createElement(
							"span",
							{ className: "del", onClick: _this2.removePic.bind(_this2, item) },
							"\xD7"
						),
						_react2.default.createElement("img", { src: item.thumbUrl,
							className: "picThumbUrl",
							onClick: _this2.preivewPic.bind(_this2, fileList) }),
						_react2.default.createElement("a", { href: item.url })
					)
				);
			});
			return arr;
		}
	}, {
		key: "removePic",
		value: function removePic(file) {
			this.props.removePic(file);
		}
	}, {
		key: "preivewPic",
		value: function preivewPic(fileList) {
			this.props.preivewPic(fileList);
		}
	}, {
		key: "render",
		value: function render() {
			var fileList = this.props.fileList;
			return _react2.default.createElement(
				"div",
				{ className: "showPicContainer" },
				this.setPicList(fileList)
			);
		}
	}]);

	return PicList;
}(_react2.default.Component);

module.exports = PicList;