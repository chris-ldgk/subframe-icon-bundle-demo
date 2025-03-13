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

const SvgFeatherFolderCog = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("circle", { cx: 18, cy: 18, r: 3 }),
    React__namespace.createElement("path", { d: "M10.3 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v3.3" }),
    React__namespace.createElement("path", { d: "m21.7 19.4-.9-.3" }),
    React__namespace.createElement("path", { d: "m15.2 16.9-.9-.3" }),
    React__namespace.createElement("path", { d: "m16.6 21.7.3-.9" }),
    React__namespace.createElement("path", { d: "m19.1 15.2.3-.9" }),
    React__namespace.createElement("path", { d: "m19.6 21.7-.4-1" }),
    React__namespace.createElement("path", { d: "m16.8 15.3-.4-1" }),
    React__namespace.createElement("path", { d: "m14.3 19.6 1-.4" }),
    React__namespace.createElement("path", { d: "m20.7 16.8 1-.4" })));

module.exports = SvgFeatherFolderCog;
