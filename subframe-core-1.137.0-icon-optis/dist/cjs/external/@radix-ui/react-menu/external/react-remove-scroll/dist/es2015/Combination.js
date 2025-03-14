'use strict';

var _tslib = require('../../../../../../../_virtual/_tslib.js');
var React = require('react');
var UI = require('./UI.js');
var sidecar = require('./sidecar.js');

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

var ReactRemoveScroll = React__namespace.forwardRef(function (props, ref) { return (React__namespace.createElement(UI.RemoveScroll, _tslib.__assign({}, props, { ref: ref, sideCar: sidecar }))); });
ReactRemoveScroll.classNames = UI.RemoveScroll.classNames;
var RemoveScroll = ReactRemoveScroll;

module.exports = RemoveScroll;
