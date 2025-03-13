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

const SvgFeatherDatabaseBackup = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("ellipse", { cx: 12, cy: 5, rx: 9, ry: 3 }),
    React__namespace.createElement("path", { d: "M3 12a9 3 0 0 0 5 2.69" }),
    React__namespace.createElement("path", { d: "M21 9.3V5" }),
    React__namespace.createElement("path", { d: "M3 5v14a9 3 0 0 0 6.47 2.88" }),
    React__namespace.createElement("path", { d: "M12 12v4h4" }),
    React__namespace.createElement("path", { d: "M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16" })));

module.exports = SvgFeatherDatabaseBackup;
