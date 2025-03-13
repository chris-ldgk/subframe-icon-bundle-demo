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

const SvgFeatherSplitSquareHorizontal = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("path", { d: "M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3" }),
    React__namespace.createElement("path", { d: "M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3" }),
    React__namespace.createElement("line", { x1: 12, x2: 12, y1: 4, y2: 20 })));

module.exports = SvgFeatherSplitSquareHorizontal;
