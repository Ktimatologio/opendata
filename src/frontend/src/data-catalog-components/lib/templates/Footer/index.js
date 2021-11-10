"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _Menu = _interopRequireDefault(require("../../components/Menu"));

function Footer(_ref) {
  var links = _ref.links,
      customClasses = _ref.customClasses;
  var menu1 = links ? /*#__PURE__*/_react["default"].createElement(_Menu["default"], {
    items: links.footer1,
    menuId: "leftnav"
  }) : null;
  var menu2 = links ? /*#__PURE__*/_react["default"].createElement(_Menu["default"], {
    items: links.footer2,
    menuId: "rightnav"
  }) : null;
  var footer_name = _ref.footer_name ? _ref.footer_name : "ΕΛΛΗΝΙΚΟ ΚΤΗΜΑΤΟΛΟΓΙΟ";
  var footer_addr = _ref.footer_addr ? _ref.footer_addr : "Κεντρικά Γραφεία: Μεσογείων 288, ΤΚ 155 62, Χολαργός, Τηλ: 2106505600";
  var footer_crwith = _ref.footer_crwith ? _ref.footer_crwith : "Υλοποίηση με χρήση ";
  var footer_opens = _ref.footer_opens ? _ref.footer_opens : "Ανοικτού Λογισμικού";
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "dc-footer"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(customClasses, " page-footer")
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "branding"
  }, /*#__PURE__*/_react["default"].createElement("h4", null, footer_name), /*#__PURE__*/_react["default"].createElement("p", null, footer_addr), /*#__PURE__*/_react["default"].createElement("p", null, footer_crwith, /*#__PURE__*/_react["default"].createElement("a", {
    href: "https://mathe.ellak.gr/"
  }, footer_opens)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "social"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: "https://www.facebook.com/ktimatologiogr"
  }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: ['fab', 'facebook'],
    size: "1x",
    "aria-hidden": "true",
    role: "presentation"
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: "sr-only"
  }, "Facebook")), /*#__PURE__*/_react["default"].createElement("a", {
    href: "https://twitter.com/ktimatologiogr"
  }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: ['fab', 'twitter'],
    size: "1x",
    "aria-hidden": "true",
    role: "presentation"
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: "sr-only"
  }, "Twitter")), /*#__PURE__*/_react["default"].createElement("a", {
    href: "https://www.linkedin.com/company/ktimatologiogr"
  }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: ['fab', 'linkedin'],
    size: "1x",
    "aria-hidden": "true",
    role: "presentation"
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: "sr-only"
  }, "Linkedin")), /*#__PURE__*/_react["default"].createElement("a", {
    href: "https://github.com/Ktimatologio/"
  }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: ['fab', 'github'],
    size: "1x",
    "aria-hidden": "true",
    role: "presentation"
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: "sr-only"
  }, "Github")))), menu1, menu2));
}

Footer.defaultProps = {
  customClasses: '',
  links: null
};
Footer.propTypes = {
  customClasses: _propTypes["default"].string,
  links: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    label: _propTypes["default"].string,
    url: _propTypes["default"].string
  }))
};
var _default = Footer;
exports["default"] = _default;