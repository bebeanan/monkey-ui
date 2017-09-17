'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcMenu = require('rc-menu');

var _rcMenu2 = _interopRequireDefault(_rcMenu);

var _dropdown = require('../dropdown');

var _dropdown2 = _interopRequireDefault(_dropdown);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _checkbox = require('../checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _radio = require('../radio');

var _radio2 = _interopRequireDefault(_radio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FilterMenu = function (_React$Component) {
  _inherits(FilterMenu, _React$Component);

  function FilterMenu(props) {
    _classCallCheck(this, FilterMenu);

    var _this = _possibleConstructorReturn(this, (FilterMenu.__proto__ || Object.getPrototypeOf(FilterMenu)).call(this, props));

    _this.state = {
      selectedKeys: props.selectedKeys,
      keyPathOfSelectedItem: {}, // 记录所有有选中子菜单的祖先菜单
      visible: false
    };
    return _this;
  }

  _createClass(FilterMenu, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        selectedKeys: nextProps.selectedKeys
      });
    }
  }, {
    key: 'setSelectedKeys',
    value: function setSelectedKeys(_ref) {
      var selectedKeys = _ref.selectedKeys;

      this.setState({ selectedKeys: selectedKeys });
    }
  }, {
    key: 'handleClearFilters',
    value: function handleClearFilters() {
      this.setState({
        selectedKeys: []
      }, this.handleConfirm);
    }
  }, {
    key: 'handleConfirm',
    value: function handleConfirm() {
      this.setState({
        visible: false
      });
      this.props.confirmFilter(this.props.column, this.state.selectedKeys);
    }
  }, {
    key: 'onVisibleChange',
    value: function onVisibleChange(visible) {
      this.setState({
        visible: visible
      });
      if (!visible) {
        this.props.confirmFilter(this.props.column, this.state.selectedKeys);
      }
    }
  }, {
    key: 'renderMenuItem',
    value: function renderMenuItem(item) {
      var column = this.props.column;

      var multiple = 'filterMultiple' in column ? column.filterMultiple : true;
      return _react2.default.createElement(
        _rcMenu.Item,
        { key: item.value },
        multiple ? _react2.default.createElement(_checkbox2.default, { checked: this.state.selectedKeys.indexOf(item.value.toString()) >= 0 }) : _react2.default.createElement(_radio2.default, { checked: this.state.selectedKeys.indexOf(item.value.toString()) >= 0 }),
        _react2.default.createElement(
          'span',
          null,
          item.text
        )
      );
    }
  }, {
    key: 'renderMenus',
    value: function renderMenus(items) {
      var _this2 = this;

      return items.map(function (item) {
        if (item.children && item.children.length > 0) {
          var keyPathOfSelectedItem = _this2.state.keyPathOfSelectedItem;

          var containSelected = Object.keys(keyPathOfSelectedItem).some(function (key) {
            return keyPathOfSelectedItem[key].indexOf(item.value) >= 0;
          });
          var subMenuCls = containSelected ? 'ant-dropdown-submenu-contain-selected' : '';
          return _react2.default.createElement(
            _rcMenu.SubMenu,
            { title: item.text, className: subMenuCls, key: item.value.toString() },
            item.children.map(function (child) {
              return _this2.renderMenuItem(child);
            })
          );
        }
        return _this2.renderMenuItem(item);
      });
    }
  }, {
    key: 'handleMenuItemClick',
    value: function handleMenuItemClick(info) {
      if (info.keyPath.length <= 1) {
        return;
      }
      var keyPathOfSelectedItem = this.state.keyPathOfSelectedItem;
      if (this.state.selectedKeys.indexOf(info.key) >= 0) {
        // deselect SubMenu child
        delete keyPathOfSelectedItem[info.key];
      } else {
        // select SubMenu child
        keyPathOfSelectedItem[info.key] = info.keyPath;
      }
      this.setState({ keyPathOfSelectedItem: keyPathOfSelectedItem });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          column = _props.column,
          locale = _props.locale;
      // default multiple selection in filter dropdown

      var multiple = 'filterMultiple' in column ? column.filterMultiple : true;

      var menus = column.filterDropdown ? column.filterDropdown : _react2.default.createElement(
        'div',
        { className: 'ant-table-filter-dropdown' },
        _react2.default.createElement(
          _rcMenu2.default,
          {
            multiple: multiple,
            onClick: this.handleMenuItemClick,
            prefixCls: 'ant-dropdown-menu',
            onSelect: this.setSelectedKeys,
            onDeselect: this.setSelectedKeys,
            selectedKeys: this.state.selectedKeys
          },
          this.renderMenus(column.filters)
        ),
        _react2.default.createElement(
          'div',
          { className: 'ant-table-filter-dropdown-btns' },
          _react2.default.createElement(
            'a',
            {
              className: 'ant-table-filter-dropdown-link confirm',
              onClick: this.handleConfirm
            },
            locale.filterConfirm
          ),
          _react2.default.createElement(
            'a',
            {
              className: 'ant-table-filter-dropdown-link clear',
              onClick: this.handleClearFilters
            },
            locale.filterReset
          )
        )
      );

      var dropdownSelectedClass = this.props.selectedKeys.length > 0 ? 'ant-table-filter-selected' : '';

      return _react2.default.createElement(
        _dropdown2.default,
        {
          trigger: ['click'],
          overlay: menus,
          visible: this.state.visible,
          onVisibleChange: this.onVisibleChange,
          closeOnSelect: false
        },
        _react2.default.createElement(_icon2.default, { title: locale.filterTitle, type: 'filter', className: dropdownSelectedClass })
      );
    }
  }]);

  return FilterMenu;
}(_react2.default.Component);

exports.default = FilterMenu;


FilterMenu.defaultProps = {
  handleFilter: function handleFilter() {},

  column: null
};