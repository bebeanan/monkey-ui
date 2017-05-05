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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// 接口参数设计：
// 参数属性：areaTree（数据源）
// value
// text
// 函数属性：close（关闭模态框）
// onChange(选择地区后回调函数，返回value，text)


var noop = function noop() {};

var getChild = function getChild(area, idArr) {
    var l = idArr.length;
    var j = 0;
    var children = area;
    if (!idArr || l == 0) return area;
    while (j < l) {
        for (var i = 0; i < children.length; i++) {
            if (children[i].value == idArr[j]) {
                children = children[i].children;
                j++;
                break;
            }
        }
    }

    return children;
};

var AreaCascader = function (_Component) {
    _inherits(AreaCascader, _Component);

    function AreaCascader(props) {
        _classCallCheck(this, AreaCascader);

        var _this = _possibleConstructorReturn(this, (AreaCascader.__proto__ || Object.getPrototypeOf(AreaCascader)).call(this, props));

        _initialiseProps.call(_this);

        var value = void 0;var text = void 0;
        if ('value' in props) value = props.value;else if ('defaultValue' in props) value = props.defaultValue;else value = [];

        if ('text' in props) text = props.text;else text = [];

        if ('onChange' in props) _this.onChange = props.onChange;else _this.onChange = noop;
        _this.state = {
            selectedList: value,
            showList: _this.props.areaTree,
            showText: text,
            areaTree: _this.props.areaTree,
            show: 'none'
        };
        return _this;
    }

    _createClass(AreaCascader, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.setState({ areaTree: nextProps.areaTree, showList: nextProps.areaTree, selectedList: nextProps.value, showText: nextProps.text });
        }
    }, {
        key: 'getValue',
        value: function getValue(e) {
            e.stopPropagation();
            var value = e.target.value;
            var text = e.target.innerText;
            this.state.showText.push(text);
            this.state.selectedList.push(value);
            var children = getChild(this.state.areaTree, this.state.selectedList);
            this.setState({ selectedList: this.state.selectedList, showText: this.state.showText, showList: children });
            if (children.length == 0) {
                this.setState({ show: 'none' });
                // this.close();//关闭模态框
                this.onChange(this.state.selectedList, this.state.showText); //回调函数
            }
        }
        ///////////////

    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var showText = this.state.showText;
            var text = this.state.showText.join('/');
            if (showText.length == 0) text = this.props.placeholder ? this.props.placeholder : "请点击选择地区";
            return _react2.default.createElement(
                'div',
                { onClick: function onClick() {
                        return _this2.open();
                    } },
                _react2.default.createElement(
                    'div',
                    { className: 'excluedText' },
                    text
                ),
                _react2.default.createElement(
                    'div',
                    { style: { display: this.state.show == 'block' ? 'block' : 'none' } },
                    _react2.default.createElement('div', { className: 'zhe' }),
                    _react2.default.createElement(
                        'div',
                        { className: 'main' },
                        _react2.default.createElement(
                            'div',
                            { className: 'title' },
                            '\u6237\u7C4D\u6240\u5728\u5730',
                            _react2.default.createElement(
                                'span',
                                { className: 'close', onClick: function onClick(event) {
                                        return _this2.close(event);
                                    } },
                                '\xD7'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'title_border' },
                            this.getSelectTitle(this.state.showText)
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'c_body' },
                            _react2.default.createElement(
                                'ul',
                                null,
                                this.childToList(this.state.showList)
                            )
                        )
                    )
                )
            );
        }
    }]);

    return AreaCascader;
}(_react.Component);

var _initialiseProps = function _initialiseProps() {
    var _this3 = this;

    this.childToList = function (arr) {
        if (!arr || arr.length == 0) return null;
        return arr.map(function (item) {
            return _react2.default.createElement(
                'li',
                { key: item.value, value: item.value, onClick: function onClick(e) {
                        return _this3.getValue(e);
                    } },
                item.label
            );
        });
    };

    this.clickTitle = function (e) {
        var value = e.target.id;
        var text = e.target.innerText;
        var selectedList = _this3.state.selectedList;
        var showText = _this3.state.showText;
        var index = 0;
        var index_t = 0;
        // let index=this.state.selectedList.indexOf(value);
        for (var i = 0; i < selectedList.length; i++) {
            if (selectedList[i] == value) {
                index = i;
                break;
            }
        }
        for (var _i = 0; _i < showText.length; _i++) {
            if (showText[_i] == text) {
                index_t = _i;
                break;
            }
        }
        selectedList = selectedList.slice(0, index);
        showText = showText.slice(0, index_t);
        var children = getChild(_this3.state.areaTree, selectedList);
        _this3.setState({ showList: children, selectedList: selectedList, showText: showText });
    };

    this.getSelectTitle = function (arr) {
        var list = [];
        if (!arr || arr.length == 0) return null;
        for (var i = 0; i < arr.length; i++) {
            list.push(_react2.default.createElement(
                'span',
                { key: arr[i], className: 'title_li', id: _this3.state.selectedList[i], onClick: function onClick(e) {
                        return _this3.clickTitle(e);
                    } },
                arr[i]
            ));
        }
        return list;
    };

    this.onChange = function (value, text) {
        console.log(1);
    };

    this.close = function (event) {
        event.stopPropagation();
        _this3.state.show = 'none';
        _this3.setState(_this3.state);
    };

    this.open = function () {
        _this3.setState({ show: 'block' });
    };
};

exports.default = AreaCascader;