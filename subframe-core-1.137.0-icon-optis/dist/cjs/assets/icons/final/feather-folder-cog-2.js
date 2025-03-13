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

const SvgFeatherFolderCog2 = (props) => (React__namespace.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React__namespace.createElement("path", { d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" }),
    React__namespace.createElement("circle", { cx: 12, cy: 13, r: 2 }),
    React__namespace.createElement("path", { d: "M12 10v1" }),
    React__namespace.createElement("path", { d: "M12 15v1" }),
    React__namespace.createElement("path", { d: "m14.6 11.5-.87.5" }),
    React__namespace.createElement("path", { d: "m10.27 14-.87.5" }),
    React__namespace.createElement("path", { d: "m14.6 14.5-.87-.5" }),
    React__namespace.createElement("path", { d: "m10.27 12-.87-.5" })));

module.exports = SvgFeatherFolderCog2;
