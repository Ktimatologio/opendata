"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var StepsBlock = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(StepsBlock, _React$PureComponent);

  var _super = _createSuper(StepsBlock);

  function StepsBlock() {
    (0, _classCallCheck2["default"])(this, StepsBlock);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(StepsBlock, [{
    key: "render",
    value: function render() {
      var content = this.props.content;
      return /*#__PURE__*/_react["default"].createElement("div", {
        key: content.ref,
        className: "steps-block"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "steps-step"
      }, content.step), /*#__PURE__*/_react["default"].createElement("h3", null, content.title), /*#__PURE__*/_react["default"].createElement("p", null, content.content));
    }
  }]);
  return StepsBlock;
}(_react["default"].PureComponent);

StepsBlock.defaultProps = {
  step: '',
  title: '',
  content: ''
};
StepsBlock.propTypes = {
  step: _propTypes["default"].string,
  title: _propTypes["default"].string,
  content: _propTypes["default"].string
};
var _default = StepsBlock;
exports["default"] = _default;