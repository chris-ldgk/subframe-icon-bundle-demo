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

const SvgFeatherHotel = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("path", { d: "M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z" }),
    React__namespace.createElement("path", { d: "m9 16 .348-.24c1.465-1.013 3.84-1.013 5.304 0L15 16" }),
    React__namespace.createElement("path", { d: "M8 7h.01" }),
    React__namespace.createElement("path", { d: "M16 7h.01" }),
    React__namespace.createElement("path", { d: "M12 7h.01" }),
    React__namespace.createElement("path", { d: "M12 11h.01" }),
    React__namespace.createElement("path", { d: "M16 11h.01" }),
    React__namespace.createElement("path", { d: "M8 11h.01" }),
    React__namespace.createElement("path", { d: "M10 22v-6.5m4 0V22" })));

module.exports = SvgFeatherHotel;
