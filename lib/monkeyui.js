"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _row = require("./layout/row");

var _row2 = _interopRequireDefault(_row);

var _col = require("./layout/col");

var _col2 = _interopRequireDefault(_col);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MonkeyUi = {
	Row: _row2.default,
	Col: _col2.default
};
exports.default = MonkeyUi;