'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _MSI2 = require('./MSI.js');

var _MSI3 = _interopRequireDefault(_MSI2);

var _checksums = require('./checksums.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var MSI11 = function (_MSI) {
	_inherits(MSI11, _MSI);

	function MSI11(string) {
		_classCallCheck(this, MSI11);

		var _this = _possibleConstructorReturn(this, _MSI.call(this, string));

		_this.string += (0, _checksums.mod11)(_this.string);
		return _this;
	}

	return MSI11;
}(_MSI3.default);

exports.default = MSI11;