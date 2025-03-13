"use client";
import { __rest } from '../_virtual/_tslib.js';
import { Root as Root2, Item as Item2 } from '../external/@radix-ui/react-toggle-group/dist/index.js';
import React__default from 'react';

const Root = React__default.forwardRef(function Root(_a, ref) {
    var { className, type = "single" } = _a, otherProps = __rest(_a, ["className", "type"]);
    return React__default.createElement(Root2, Object.assign({ ref: ref, className: className, type: type }, otherProps));
});
const Item = Item2;
const ToggleGroup = { Root, Item };

export { Item, Root, ToggleGroup };
