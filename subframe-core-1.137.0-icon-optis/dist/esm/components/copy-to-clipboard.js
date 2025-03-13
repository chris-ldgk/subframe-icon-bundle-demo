"use client";
import { __rest } from '../_virtual/_tslib.js';
import copy from '../external/copy-to-clipboard/index.js';
import React__default, { useCallback } from 'react';
import { composeRefs } from '../lib/compose-react-refs.js';

const Root = React__default.forwardRef(function CopyToClipboardRootComponent(props, ref) {
    var _a, _b;
    const { clipboardText, onCopy, children, options } = props, otherProps = __rest(props, ["clipboardText", "onCopy", "children", "options"]);
    const format = options === null || options === void 0 ? void 0 : options.format;
    const elem = children && React__default.Children.only(children);
    const elemOnClick = (_a = elem === null || elem === void 0 ? void 0 : elem.props) === null || _a === void 0 ? void 0 : _a.onClick;
    const onClick = useCallback((event) => {
        if (clipboardText !== undefined) {
            if (format) {
                copy(clipboardText, { format });
            }
            else {
                copy(clipboardText);
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
        ? React__default.cloneElement(elem, Object.assign(Object.assign({}, otherProps), { onClick, ref: composeRefs(ref, (_b = elem === null || elem === void 0 ? void 0 : elem.props) === null || _b === void 0 ? void 0 : _b.ref) }))
        : null;
});
const CopyToClipboard = { Root };

export { CopyToClipboard, Root };
