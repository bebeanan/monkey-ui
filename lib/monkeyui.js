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

var _index5 = require("./modal/index");

var _index6 = _interopRequireDefault(_index5);

var _index7 = require("./tree/index");

var _index8 = _interopRequireDefault(_index7);

var _index9 = require("./message/index");

var _index10 = _interopRequireDefault(_index9);

var _index11 = require("./alert/index");

var _index12 = _interopRequireDefault(_index11);

var _index13 = require("./collapse/index");

var _index14 = _interopRequireDefault(_index13);

var _index15 = require("./input/index");

var _index16 = _interopRequireDefault(_index15);

var _index17 = require("./radio/index");

var _index18 = _interopRequireDefault(_index17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MonkeyUi = {
	Row: _row2.default,
	Col: _col2.default,
	Button: _index2.default,
	Checkbox: _index4.default,
	Modal: _index6.default,
	Tree: _index8.default,
	Message: _index10.default,
	Alert: _index12.default,
	Collapse: _index14.default,
	Input: _index16.default,
	// Table : Table,
	Radio: _index18.default
};
// import Table from "./table/index";
exports.default = MonkeyUi;