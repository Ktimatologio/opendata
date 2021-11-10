"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var SearchSort = function SearchSort(_ref) {
  var className = _ref.className,
      currentValue = _ref.currentValue,
      inputClasses = _ref.inputClasses,
      label = _ref.label,
      options = _ref.options,
      sortFunc = _ref.sortFunc;
      var order_bydate = _ref.order_bydate ? _ref.order_bydate : "Ημερομηνία";
      var order_byabc = _ref.order_bydate ? _ref.order_bydate : "Αλφαβητικά";
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: className
  }, /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "search-sort"
  }, label), /*#__PURE__*/_react["default"].createElement("select", {
    id: "search-sort",
    className: inputClasses,
    value: currentValue,
    onChange: sortFunc
  }, options.map(function (opt) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      key: opt.value,
      value: opt.value
    }, opt.label);
  })));
};

SearchSort.defaultProps = {
  className: 'search-sort',
  inputClasses: 'search-sort-input',
  label: 'Ταξινόμηση κατά',
  options: [{
    value: 'relevance',
    label: 'Relevance'
  }, {
    value: 'date',
    label: 'Ημερομηνία'
  }, {
    value: 'alpha',
    label: 'Αλφαβητικά'
  }]
};
SearchSort.propTypes = {
  className: _propTypes["default"].string,
  currentValue: _propTypes["default"].string.isRequired,
  inputClasses: _propTypes["default"].string,
  label: _propTypes["default"].string,
  options: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    value: _propTypes["default"].string,
    label: _propTypes["default"].string
  })),
  sortFunc: _propTypes["default"].func.isRequired
};
var _default = SearchSort;
exports["default"] = _default;