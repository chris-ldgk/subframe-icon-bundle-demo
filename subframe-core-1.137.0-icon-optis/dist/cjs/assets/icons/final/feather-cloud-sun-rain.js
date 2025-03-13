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

const SvgFeatherCloudSunRain = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("path", { d: "M12 2v2" }),
    React__namespace.createElement("path", { d: "m4.93 4.93 1.41 1.41" }),
    React__namespace.createElement("path", { d: "M20 12h2" }),
    React__namespace.createElement("path", { d: "m19.07 4.93-1.41 1.41" }),
    React__namespace.createElement("path", { d: "M15.947 12.65a4 4 0 0 0-5.925-4.128" }),
    React__namespace.createElement("path", { d: "M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24" }),
    React__namespace.createElement("path", { d: "M11 20v2" }),
    React__namespace.createElement("path", { d: "M7 19v2" })));

module.exports = SvgFeatherCloudSunRain;
