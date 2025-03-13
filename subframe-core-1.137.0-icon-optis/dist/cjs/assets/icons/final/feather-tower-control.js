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

const SvgFeatherTowerControl = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("path", { d: "M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73Z" }),
    React__namespace.createElement("path", { d: "M8 13v9" }),
    React__namespace.createElement("path", { d: "M16 22v-9" }),
    React__namespace.createElement("path", { d: "m9 6 1 7" }),
    React__namespace.createElement("path", { d: "m15 6-1 7" }),
    React__namespace.createElement("path", { d: "M12 6V2" }),
    React__namespace.createElement("path", { d: "M13 2h-2" })));

module.exports = SvgFeatherTowerControl;
