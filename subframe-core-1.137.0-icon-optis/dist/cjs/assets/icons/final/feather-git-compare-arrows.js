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

const SvgFeatherGitCompareArrows = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("circle", { cx: 5, cy: 6, r: 3 }),
    React__namespace.createElement("path", { d: "M12 6h5a2 2 0 0 1 2 2v7" }),
    React__namespace.createElement("path", { d: "m15 9-3-3 3-3" }),
    React__namespace.createElement("circle", { cx: 19, cy: 18, r: 3 }),
    React__namespace.createElement("path", { d: "M12 18H7a2 2 0 0 1-2-2V9" }),
    React__namespace.createElement("path", { d: "m9 15 3 3-3 3" })));

module.exports = SvgFeatherGitCompareArrows;
