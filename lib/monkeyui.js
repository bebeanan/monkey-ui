"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _row = require("./layout/row");

var _row2 = _interopRequireDefault(_row);

var _col = require("./layout/col");

var _col2 = _interopRequireDefault(_col);

var _index = require("./button/index");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("./checkbox/index");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MonkeyUi = {
	Row: _row2.default,
	Col: _col2.default,
	Button: _index2.default,
	CheckBox: _index4.default
};
exports.default = MonkeyUi;