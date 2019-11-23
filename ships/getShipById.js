"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getShipById = exports.default = void 0;

var _lodash = require("lodash");

var _ships = _interopRequireDefault(require("./ships.json"));

var _getShipIds = _interopRequireDefault(require("./getShipIds"));

var _isPositiveIntegerNumber = _interopRequireDefault(require("./util/isPositiveIntegerNumber"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getShipById = id => {
  if (!(0, _isPositiveIntegerNumber.default)(id)) return undefined;
  let shipIndex = (0, _lodash.findIndex)(_getShipIds.default, index => (0, _lodash.toNumber)(index) === (0, _lodash.toNumber)(id));
  return _ships.default[_getShipIds.default[shipIndex]] ? _ships.default[_getShipIds.default[shipIndex]] : undefined;
};

exports.getShipById = getShipById;
var _default = getShipById;
exports.default = _default;