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

const SvgFeatherFingerprint = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("path", { d: "M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4" }),
    React__namespace.createElement("path", { d: "M5 19.5C5.5 18 6 15 6 12c0-.7.12-1.37.34-2" }),
    React__namespace.createElement("path", { d: "M17.29 21.02c.12-.6.43-2.3.5-3.02" }),
    React__namespace.createElement("path", { d: "M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4" }),
    React__namespace.createElement("path", { d: "M8.65 22c.21-.66.45-1.32.57-2" }),
    React__namespace.createElement("path", { d: "M14 13.12c0 2.38 0 6.38-1 8.88" }),
    React__namespace.createElement("path", { d: "M2 16h.01" }),
    React__namespace.createElement("path", { d: "M21.8 16c.2-2 .131-5.354 0-6" }),
    React__namespace.createElement("path", { d: "M9 6.8a6 6 0 0 1 9 5.2c0 .47 0 1.17-.02 2" })));

module.exports = SvgFeatherFingerprint;
