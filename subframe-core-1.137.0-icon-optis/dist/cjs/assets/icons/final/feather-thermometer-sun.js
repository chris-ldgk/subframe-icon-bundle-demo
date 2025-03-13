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

const SvgFeatherThermometerSun = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("path", { d: "M12 9a4 4 0 0 0-2 7.5" }),
    React__namespace.createElement("path", { d: "M12 3v2" }),
    React__namespace.createElement("path", { d: "m6.6 18.4-1.4 1.4" }),
    React__namespace.createElement("path", { d: "M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" }),
    React__namespace.createElement("path", { d: "M4 13H2" }),
    React__namespace.createElement("path", { d: "M6.34 7.34 4.93 5.93" })));

module.exports = SvgFeatherThermometerSun;
