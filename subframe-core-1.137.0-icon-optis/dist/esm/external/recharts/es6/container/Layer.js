import React__default from 'react';
import { clsx } from '../../../clsx/dist/clsx.js';
import { filterProps } from '../util/ReactUtils.js';

var _excluded = ["children", "className"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } } return target; }
var Layer = /*#__PURE__*/React__default.forwardRef(function (props, ref) {
  var children = props.children,
    className = props.className,
    others = _objectWithoutProperties(props, _excluded);
  var layerClass = clsx('recharts-layer', className);
  return /*#__PURE__*/React__default.createElement("g", _extends({
    className: layerClass
  }, filterProps(others, true), {
    ref: ref
  }), children);
});

export { Layer };
