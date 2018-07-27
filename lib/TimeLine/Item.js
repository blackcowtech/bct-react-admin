"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TimeLineItem = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Header = require("./Header");

var _Footer = require("./Footer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var TimeLineItem =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(TimeLineItem, _PureComponent);

  function TimeLineItem() {
    _classCallCheck(this, TimeLineItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(TimeLineItem).apply(this, arguments));
  }

  _createClass(TimeLineItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          footer = _this$props.footer,
          title = _this$props.title,
          icon = _this$props.icon,
          titleIcon = _this$props.titleIcon,
          time = _this$props.time,
          color = _this$props.color;
      return _react.default.createElement("li", null, _react.default.createElement("i", {
        className: "".concat(icon, " ").concat(color ? "bg-".concat(color) : '')
      }), children ? _react.default.createElement("div", {
        className: "timeline-item"
      }, _react.default.createElement("span", {
        className: "time"
      }, _react.default.createElement("i", {
        className: titleIcon
      }), time), _react.default.createElement(_Header.TimeLineHeader, null, _react.default.createElement("span", null, title)), _react.default.createElement("div", {
        className: "timeline-body"
      }, children), footer ? {
        footer: footer
      } : _react.default.createElement(_Footer.TimeLineFooter, null)) : null);
    }
  }]);

  return TimeLineItem;
}(_react.PureComponent);

exports.TimeLineItem = TimeLineItem;
TimeLineItem.propTypes = {
  icon: _propTypes.default.string,
  color: _propTypes.default.string,
  children: _propTypes.default.node,
  footer: _propTypes.default.node,
  title: _propTypes.default.string,
  titleIcon: _propTypes.default.string,
  time: _propTypes.default.string
};
TimeLineItem.defaultProps = {
  icon: '',
  titleIcon: 'fa fa-clock-o',
  color: 'blue',
  children: null,
  footer: null,
  title: '',
  time: ''
};
var _default = {
  TimeLineItem: TimeLineItem
};
exports.default = _default;