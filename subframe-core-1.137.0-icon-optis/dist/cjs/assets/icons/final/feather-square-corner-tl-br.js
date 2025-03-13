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

const SvgFeatherSquareCornerTlBr = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("path", { d: "M16.005 20.995L19.005 20.995C19.5354 20.995 20.0441 20.7843 20.4192 20.4092C20.7943 20.0341 21.005 19.5254 21.005 18.995L21.005 15.995M8.005 2.99499L5.005 2.99499C4.47457 2.99499 3.96586 3.20571 3.59079 3.58078C3.21572 3.95585 3.005 4.46456 3.005 4.99499L3.005 7.99499M21.005 2.995L21.005 3.005M3.005 20.995L3.005 21.005" })));

module.exports = SvgFeatherSquareCornerTlBr;
