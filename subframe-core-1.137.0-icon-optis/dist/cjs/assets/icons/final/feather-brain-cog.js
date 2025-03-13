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

const SvgFeatherBrainCog = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("circle", { cx: 12, cy: 12, r: 3 }),
    React__namespace.createElement("path", { d: "M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08A2.5 2.5 0 0 0 12 19.5a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 12 4.5" }),
    React__namespace.createElement("path", { d: "m15.7 10.4-.9.4" }),
    React__namespace.createElement("path", { d: "m9.2 13.2-.9.4" }),
    React__namespace.createElement("path", { d: "m13.6 15.7-.4-.9" }),
    React__namespace.createElement("path", { d: "m10.8 9.2-.4-.9" }),
    React__namespace.createElement("path", { d: "m15.7 13.5-.9-.4" }),
    React__namespace.createElement("path", { d: "m9.2 10.9-.9-.4" }),
    React__namespace.createElement("path", { d: "m10.5 15.7.4-.9" }),
    React__namespace.createElement("path", { d: "m13.1 9.2.4-.9" })));

module.exports = SvgFeatherBrainCog;
