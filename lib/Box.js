"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Box = void 0;

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

var Box =
/*#__PURE__*/
function (_Component) {
  _inherits(Box, _Component);

  function Box(props) {
    var _this;

    _classCallCheck(this, Box);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Box).call(this, props));
    _this.state = {
      expanded: 'expanded' in props ? props.expanded : true
    };
    _this.onExpandClick = _this.onExpandClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Box, [{
    key: "onExpandClick",
    value: function onExpandClick() {
      this.setState(function (prevState) {
        return {
          expanded: !prevState.expanded
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          solid = _this$props.solid,
          boxColor = _this$props.boxColor,
          title = _this$props.title,
          expandable = _this$props.expandable;
      var expanded = this.state.expanded;
      return _react.default.createElement("div", {
        className: solid ? "box box-solid box-".concat(boxColor) : "box box-".concat(boxColor)
      }, _react.default.createElement("div", {
        className: "box-header with-border"
      }, _react.default.createElement("div", {
        className: "box-title",
        onClick: this.onExpandClick,
        onKeyDown: this.onExpandClick,
        role: "button",
        tabIndex: 0
      }, title && _react.default.createElement("h3", null, title)), _react.default.createElement("div", {
        className: "box-tools"
      }, expandable && !expanded && _react.default.createElement("i", {
        className: "fa fa-window-maximize",
        onClick: this.onExpandClick,
        onKeyDown: this.onExpandClick,
        role: "button",
        tabIndex: 0
      }), expandable && expanded && _react.default.createElement("i", {
        className: "fa fa-window-minimize",
        onClick: this.onExpandClick,
        onKeyDown: this.onExpandClick,
        role: "button",
        tabIndex: 0
      }))), _react.default.createElement("div", {
        className: expanded ? 'box-body' : 'box_body hide'
      }, children), _react.default.createElement("div", {
        className: solid ? "box-footer box-footer-solid ".concat(boxColor) : "box-footer ".concat(boxColor)
      }));
    }
  }]);

  return Box;
}(_react.Component);

exports.Box = Box;
Box.propTypes = {
  solid: _propTypes.default.bool,
  expanded: _propTypes.default.bool,
  expandable: _propTypes.default.bool,
  boxColor: _propTypes.default.string,
  title: _propTypes.default.string,
  children: _propTypes.default.node
};
Box.defaultProps = {
  solid: false,
  expanded: true,
  expandable: true,
  boxColor: 'success',
  title: '',
  children: null
};
var _default = {
  Box: Box
};
exports.default = _default;