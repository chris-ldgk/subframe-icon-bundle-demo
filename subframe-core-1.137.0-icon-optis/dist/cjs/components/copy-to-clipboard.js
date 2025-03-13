"use client";
'use strict';

var _tslib = require('../_virtual/_tslib.js');
var index = require('../external/copy-to-clipboard/index.js');
var React = require('react');
var composeReactRefs = require('../lib/compose-react-refs.js');

const Root = React.forwardRef(function CopyToClipboardRootComponent(props, ref) {
    var _a, _b;
    const { clipboardText, onCopy, children, options } = props, otherProps = _tslib.__rest(props, ["clipboardText", "onCopy", "children", "options"]);
    const format = options === null || options === void 0 ? void 0 : options.format;
    const elem = children && React.Children.only(children);
    const elemOnClick = (_a = elem === null || elem === void 0 ? void 0 : elem.props) === null || _a === void 0 ? void 0 : _a.onClick;
    const onClick = React.useCallback((event) => {
        if (clipboardText !== undefined) {
            if (format) {
                index(clipboardText, { format });
            }
            else {
                index(clipboardText);
            }
            if (onCopy) {
                onCopy();
            }
        }
        // Bypass onClick if it was present
        if (typeof elemOnClick === "function") {
            elemOnClick(event);
        }
    }, [onCopy, clipboardText, elemOnClick, format]);
    return elem
        ? React.cloneElement(elem, Object.assign(Object.assign({}, otherProps), { onClick, ref: composeReactRefs.composeRefs(ref, (_b = elem === null || elem === void 0 ? void 0 : elem.props) === null || _b === void 0 ? void 0 : _b.ref) }))
        : null;
});
const CopyToClipboard = { Root };

exports.CopyToClipboard = CopyToClipboard;
exports.Root = Root;
