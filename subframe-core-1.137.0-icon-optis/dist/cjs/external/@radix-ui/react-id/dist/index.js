'use strict';

var React = require('react');
var index = require('../../react-use-layout-effect/dist/index.js');

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

// packages/react/id/src/id.tsx
var useReactId = React__namespace["useId".toString()] || (() => void 0);
var count = 0;
function useId(deterministicId) {
  const [id, setId] = React__namespace.useState(useReactId());
  index.useLayoutEffect(() => {
    if (!deterministicId) setId((reactId) => reactId ?? String(count++));
  }, [deterministicId]);
  return deterministicId || (id ? `radix-${id}` : "");
}

exports.useId = useId;
