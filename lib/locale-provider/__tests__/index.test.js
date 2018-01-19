'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _mockdate = require('mockdate');

var _mockdate2 = _interopRequireDefault(_mockdate);

var _ = require('../../');

var _en_GB = require('../en_GB');

var _en_GB2 = _interopRequireDefault(_en_GB);

var _fr_FR = require('../fr_FR');

var _fr_FR2 = _interopRequireDefault(_fr_FR);

var _nl_BE = require('../nl_BE');

var _nl_BE2 = _interopRequireDefault(_nl_BE);

var _it_IT = require('../it_IT');

var _it_IT2 = _interopRequireDefault(_it_IT);

var _en_US = require('../en_US');

var _en_US2 = _interopRequireDefault(_en_US);

var _pt_BR = require('../pt_BR');

var _pt_BR2 = _interopRequireDefault(_pt_BR);

var _pt_PT = require('../pt_PT');

var _pt_PT2 = _interopRequireDefault(_pt_PT);

var _ru_RU = require('../ru_RU');

var _ru_RU2 = _interopRequireDefault(_ru_RU);

var _es_ES = require('../es_ES');

var _es_ES2 = _interopRequireDefault(_es_ES);

var _sv_SE = require('../sv_SE');

var _sv_SE2 = _interopRequireDefault(_sv_SE);

var _fr_BE = require('../fr_BE');

var _fr_BE2 = _interopRequireDefault(_fr_BE);

var _de_DE = require('../de_DE');

var _de_DE2 = _interopRequireDefault(_de_DE);

var _nl_NL = require('../nl_NL');

var _nl_NL2 = _interopRequireDefault(_nl_NL);

var _ca_ES = require('../ca_ES');

var _ca_ES2 = _interopRequireDefault(_ca_ES);

var _cs_CZ = require('../cs_CZ');

var _cs_CZ2 = _interopRequireDefault(_cs_CZ);

var _ko_KR = require('../ko_KR');

var _ko_KR2 = _interopRequireDefault(_ko_KR);

var _et_EE = require('../et_EE');

var _et_EE2 = _interopRequireDefault(_et_EE);

var _sk_SK = require('../sk_SK');

var _sk_SK2 = _interopRequireDefault(_sk_SK);

var _ja_JP = require('../ja_JP');

var _ja_JP2 = _interopRequireDefault(_ja_JP);

var _tr_TR = require('../tr_TR');

var _tr_TR2 = _interopRequireDefault(_tr_TR);

var _zh_TW = require('../zh_TW');

var _zh_TW2 = _interopRequireDefault(_zh_TW);

var _fi_FI = require('../fi_FI');

var _fi_FI2 = _interopRequireDefault(_fi_FI);

var _pl_PL = require('../pl_PL');

var _pl_PL2 = _interopRequireDefault(_pl_PL);

var _bg_BG = require('../bg_BG');

var _bg_BG2 = _interopRequireDefault(_bg_BG);

var _vi_VN = require('../vi_VN');

var _vi_VN2 = _interopRequireDefault(_vi_VN);

var _th_TH = require('../th_TH');

var _th_TH2 = _interopRequireDefault(_th_TH);

var _fa_IR = require('../fa_IR');

var _fa_IR2 = _interopRequireDefault(_fa_IR);

var _el_GR = require('../el_GR');

var _el_GR2 = _interopRequireDefault(_el_GR);

var _nb_NO = require('../nb_NO');

var _nb_NO2 = _interopRequireDefault(_nb_NO);

var _sr_RS = require('../sr_RS');

var _sr_RS2 = _interopRequireDefault(_sr_RS);

var _is_IS = require('../is_IS');

var _is_IS2 = _interopRequireDefault(_is_IS);

var _ar_EG = require('../ar_EG');

var _ar_EG2 = _interopRequireDefault(_ar_EG);

var _uk_UA = require('../uk_UA');

var _uk_UA2 = _interopRequireDefault(_uk_UA);

var _zh_CN = require('../zh_CN');

var _zh_CN2 = _interopRequireDefault(_zh_CN);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable react/no-multi-comp */


var locales = [_en_US2.default, _pt_BR2.default, _pt_PT2.default, _ru_RU2.default, _es_ES2.default, _sv_SE2.default, _fr_BE2.default, _de_DE2.default, _nl_NL2.default, _ca_ES2.default, _cs_CZ2.default, _ko_KR2.default, _et_EE2.default, _sk_SK2.default, _ja_JP2.default, _tr_TR2.default, _zh_TW2.default, _fi_FI2.default, _pl_PL2.default, _bg_BG2.default, _en_GB2.default, _fr_FR2.default, _nl_BE2.default, _it_IT2.default, _vi_VN2.default, _th_TH2.default, _fa_IR2.default, _el_GR2.default, _nb_NO2.default, _sr_RS2.default, _is_IS2.default, _ar_EG2.default, _uk_UA2.default, _zh_CN2.default];

var Option = _.Select.Option;
var RangePicker = _.DatePicker.RangePicker;


var columns = [{
  title: 'Name',
  dataIndex: 'name',
  filters: [{
    text: 'filter1',
    value: 'filter1'
  }]
}, {
  title: 'Age',
  dataIndex: 'age'
}];

var App = function App() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_.Pagination, { defaultCurrent: 1, total: 50, showSizeChanger: true }),
    _react2.default.createElement(
      _.Select,
      { showSearch: true, style: { width: 200 } },
      _react2.default.createElement(
        Option,
        { value: 'jack' },
        'jack'
      ),
      _react2.default.createElement(
        Option,
        { value: 'lucy' },
        'lucy'
      )
    ),
    _react2.default.createElement(_.DatePicker, { open: true }),
    _react2.default.createElement(_.TimePicker, { open: true, defaultOpenValue: (0, _moment2.default)() }),
    _react2.default.createElement(RangePicker, { open: true, style: { width: 200 } }),
    _react2.default.createElement(
      _.Popconfirm,
      { title: 'Question?', visible: true },
      _react2.default.createElement(
        'a',
        null,
        'Click to confirm'
      )
    ),
    _react2.default.createElement(_.Transfer, {
      dataSource: [],
      showSearch: true,
      targetKeys: [],
      render: function render(item) {
        return item.title;
      }
    }),
    _react2.default.createElement(_.Calendar, { fullscreen: false, value: (0, _moment2.default)() }),
    _react2.default.createElement(_.Table, { dataSource: [], columns: columns }),
    _react2.default.createElement(
      _.Modal,
      { title: 'Locale Modal', visible: true },
      _react2.default.createElement(
        'p',
        null,
        'Locale Modal'
      )
    )
  );
};

describe('Locale Provider', function () {
  beforeAll(function () {
    _mockdate2.default.set((0, _moment2.default)('2017-09-18T03:30:07.795Z').valueOf() + new Date().getTimezoneOffset() * 60 * 1000);
  });

  afterAll(function () {
    _mockdate2.default.reset();
  });

  locales.forEach(function (locale) {
    it('should display the text as ' + locale.locale, function () {
      var wrapper = (0, _enzyme.mount)(_react2.default.createElement(
        _.LocaleProvider,
        { locale: locale },
        _react2.default.createElement(App, null)
      ));
      expect(wrapper.render()).toMatchSnapshot();
    });
  });

  it('should change locale of Modal.xxx', function () {
    var ModalDemo = function (_React$Component) {
      _inherits(ModalDemo, _React$Component);

      function ModalDemo() {
        _classCallCheck(this, ModalDemo);

        return _possibleConstructorReturn(this, (ModalDemo.__proto__ || Object.getPrototypeOf(ModalDemo)).apply(this, arguments));
      }

      _createClass(ModalDemo, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
          _.Modal.confirm({
            title: 'Hello World!'
          });
        }
      }, {
        key: 'render',
        value: function render() {
          return null;
        }
      }]);

      return ModalDemo;
    }(_react2.default.Component);

    locales.forEach(function (locale) {
      (0, _enzyme.mount)(_react2.default.createElement(
        _.LocaleProvider,
        { locale: locale },
        _react2.default.createElement(ModalDemo, null)
      ));
      var currentConfirmNode = document.querySelectorAll('.ant-confirm')[document.querySelectorAll('.ant-confirm').length - 1];
      var cancelButtonText = currentConfirmNode.querySelectorAll('.ant-btn:not(.ant-btn-primary) span')[0].innerHTML;
      var okButtonText = currentConfirmNode.querySelectorAll('.ant-btn-primary span')[0].innerHTML;
      if (locale.locale === 'zh-cn') {
        cancelButtonText = cancelButtonText.replace(' ', '');
        okButtonText = okButtonText.replace(' ', '');
      }
      expect(cancelButtonText).toBe(locale.Modal.cancelText);
      expect(okButtonText).toBe(locale.Modal.okText);
    });
  });

  it('set moment locale when locale changes', function () {
    var Test = function (_React$Component2) {
      _inherits(Test, _React$Component2);

      function Test() {
        var _ref;

        var _temp, _this2, _ret;

        _classCallCheck(this, Test);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = Test.__proto__ || Object.getPrototypeOf(Test)).call.apply(_ref, [this].concat(args))), _this2), _this2.state = {
          locale: _zh_CN2.default
        }, _temp), _possibleConstructorReturn(_this2, _ret);
      }

      _createClass(Test, [{
        key: 'render',
        value: function render() {
          return _react2.default.createElement(
            _.LocaleProvider,
            { locale: this.state.locale },
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(_.DatePicker, { defaultValue: (0, _moment2.default)(), open: true })
            )
          );
        }
      }]);

      return Test;
    }(_react2.default.Component);

    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(Test, null));
    expect(wrapper.render()).toMatchSnapshot();
    wrapper.setState({ locale: _fr_FR2.default });
    expect(wrapper.render()).toMatchSnapshot();
    wrapper.setState({ locale: null });
    expect(wrapper.render()).toMatchSnapshot();
  });
});