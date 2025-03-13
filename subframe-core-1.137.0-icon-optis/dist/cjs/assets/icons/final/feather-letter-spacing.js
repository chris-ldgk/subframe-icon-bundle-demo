'use strict';

var React = require('react');

function _interopNamespaceDefault(e) {
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespaceDefault(React);

const SvgFeatherLetterSpacing = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("path", { d: "M2 3L2 21M22 3V21M7 18.2918L8.53691 14.1763M8.53691 14.1763L11.5918 5.99591C11.5918 5.99591 11.6429 5.70817 12.0096 5.70817C12.3764 5.70817 12.4337 5.9959 12.4337 5.9959L15.4716 14.1763M8.53691 14.1763H15.4716M15.4716 14.1763L17 18.2918" })));

module.exports = SvgFeatherLetterSpacing;
