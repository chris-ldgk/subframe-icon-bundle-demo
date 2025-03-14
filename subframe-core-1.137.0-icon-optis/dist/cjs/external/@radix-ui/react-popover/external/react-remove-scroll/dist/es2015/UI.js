'use strict';

var _tslib = require('../../../../../../../_virtual/_tslib.js');
var React = require('react');
var constants = require('../../../../../../react-remove-scroll-bar/dist/es2015/constants.js');
var medium = require('./medium.js');
var useMergeRef = require('../../../../../../use-callback-ref/dist/es2015/useMergeRef.js');

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

var nothing = function () {
    return;
};
/**
 * Removes scrollbar from the page and contain the scroll within the Lock
 */
var RemoveScroll = React__namespace.forwardRef(function (props, parentRef) {
    var ref = React__namespace.useRef(null);
    var _a = React__namespace.useState({
        onScrollCapture: nothing,
        onWheelCapture: nothing,
        onTouchMoveCapture: nothing,
    }), callbacks = _a[0], setCallbacks = _a[1];
    var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? 'div' : _b, gapMode = props.gapMode, rest = _tslib.__rest(props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]);
    var SideCar = sideCar;
    var containerRef = useMergeRef.useMergeRefs([ref, parentRef]);
    var containerProps = _tslib.__assign(_tslib.__assign({}, rest), callbacks);
    return (React__namespace.createElement(React__namespace.Fragment, null,
        enabled && (React__namespace.createElement(SideCar, { sideCar: medium.effectCar, removeScrollBar: removeScrollBar, shards: shards, noIsolation: noIsolation, inert: inert, setCallbacks: setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref, gapMode: gapMode })),
        forwardProps ? (React__namespace.cloneElement(React__namespace.Children.only(children), _tslib.__assign(_tslib.__assign({}, containerProps), { ref: containerRef }))) : (React__namespace.createElement(Container, _tslib.__assign({}, containerProps, { className: className, ref: containerRef }), children))));
});
RemoveScroll.defaultProps = {
    enabled: true,
    removeScrollBar: true,
    inert: false,
};
RemoveScroll.classNames = {
    fullWidth: constants.fullWidthClassName,
    zeroRight: constants.zeroRightClassName,
};

exports.RemoveScroll = RemoveScroll;
