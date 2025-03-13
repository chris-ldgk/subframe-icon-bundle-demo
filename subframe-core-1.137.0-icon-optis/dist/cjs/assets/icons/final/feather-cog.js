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

const SvgFeatherCog = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("path", { d: "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" }),
    React__namespace.createElement("path", { d: "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" }),
    React__namespace.createElement("path", { d: "M12 2v2" }),
    React__namespace.createElement("path", { d: "M12 22v-2" }),
    React__namespace.createElement("path", { d: "m17 20.66-1-1.73" }),
    React__namespace.createElement("path", { d: "M11 10.27 7 3.34" }),
    React__namespace.createElement("path", { d: "m20.66 17-1.73-1" }),
    React__namespace.createElement("path", { d: "m3.34 7 1.73 1" }),
    React__namespace.createElement("path", { d: "M14 12h8" }),
    React__namespace.createElement("path", { d: "M2 12h2" }),
    React__namespace.createElement("path", { d: "m20.66 7-1.73 1" }),
    React__namespace.createElement("path", { d: "m3.34 17 1.73-1" }),
    React__namespace.createElement("path", { d: "m17 3.34-1 1.73" }),
    React__namespace.createElement("path", { d: "m11 13.73-4 6.93" })));

module.exports = SvgFeatherCog;
