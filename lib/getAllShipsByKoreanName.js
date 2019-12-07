"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllShipsByKoreanName = exports.default = void 0;

var _lodash = require("lodash");

var _getAllShips = _interopRequireDefault(require("./getAllShips"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getAllShipsByKoreanName = (0, _lodash.sortBy)(_getAllShips.default, ['names.kr']);
exports.getAllShipsByKoreanName = getAllShipsByKoreanName;
var _default = getAllShipsByKoreanName;
exports.default = _default;