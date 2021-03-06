"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Alert = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var Alert =
/*#__PURE__*/
function (_Component) {
  _inherits(Alert, _Component);

  function Alert(props) {
    var _this;

    _classCallCheck(this, Alert);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Alert).call(this, props));
    _this.state = {
      dismissed: false
    };
    _this.onDismiss = _this.onDismiss.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Alert, [{
    key: "onDismiss",
    value: function onDismiss() {
      this.setState(function (prevState) {
        return {
          dismissed: !prevState.dismissed
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          dismissible = _this$props.dismissible,
          icon = _this$props.icon,
          title = _this$props.title,
          color = _this$props.color;
      var dismissed = this.state.dismissed;
      return !dismissed && _react.default.createElement("div", {
        className: "alert ".concat(color ? "alert-".concat(color) : '', " ").concat(dismissible ? 'alert-dismissible' : '')
      }, dismissible && _react.default.createElement("button", {
        type: "button",
        className: "close",
        "data-dismiss": "alert",
        "aria-hidden": "true",
        onClick: this.onDismiss
      }, "\xD7"), _react.default.createElement("h4", null, icon && _react.default.createElement("i", {
        className: "icon ".concat(icon)
      }), ' ', title), children);
    }
  }]);

  return Alert;
}(_react.Component);

exports.Alert = Alert;
Alert.propTypes = {
  dismissible: _propTypes.default.bool,
  color: _propTypes.default.string,
  icon: _propTypes.default.string,
  title: _propTypes.default.string,
  children: _propTypes.default.node
};
Alert.defaultProps = {
  dismissible: false,
  color: 'info',
  icon: null,
  title: '',
  children: null
};
var _default = {
  Alert: Alert
};
exports.default = _default;