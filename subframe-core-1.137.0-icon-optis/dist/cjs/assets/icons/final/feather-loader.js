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

const SvgFeatherLoader = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("line", { x1: 12, x2: 12, y1: 2, y2: 6 }),
    React__namespace.createElement("line", { x1: 12, x2: 12, y1: 18, y2: 22 }),
    React__namespace.createElement("line", { x1: 4.93, x2: 7.76, y1: 4.93, y2: 7.76 }),
    React__namespace.createElement("line", { x1: 16.24, x2: 19.07, y1: 16.24, y2: 19.07 }),
    React__namespace.createElement("line", { x1: 2, x2: 6, y1: 12, y2: 12 }),
    React__namespace.createElement("line", { x1: 18, x2: 22, y1: 12, y2: 12 }),
    React__namespace.createElement("line", { x1: 4.93, x2: 7.76, y1: 19.07, y2: 16.24 }),
    React__namespace.createElement("line", { x1: 16.24, x2: 19.07, y1: 7.76, y2: 4.93 })));

module.exports = SvgFeatherLoader;
