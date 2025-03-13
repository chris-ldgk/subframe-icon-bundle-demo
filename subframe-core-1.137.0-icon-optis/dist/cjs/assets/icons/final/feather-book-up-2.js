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

const SvgFeatherBookUp2 = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2" }),
    React__namespace.createElement("path", { d: "M18 2h2v20H6.5a2.5 2.5 0 0 1 0-5H20" }),
    React__namespace.createElement("path", { d: "M12 13V7" }),
    React__namespace.createElement("path", { d: "m9 10 3-3 3 3" }),
    React__namespace.createElement("path", { d: "m9 5 3-3 3 3" })));

module.exports = SvgFeatherBookUp2;
