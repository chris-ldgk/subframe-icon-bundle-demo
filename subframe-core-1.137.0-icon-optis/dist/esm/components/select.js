"use client";
import { __rest } from '../_virtual/_tslib.js';
import { Root as Root2, Trigger as Trigger$1, Value as Value$1, Portal, Content as Content2, Viewport as Viewport$1, Item as Item$1, ItemText as ItemText$1 } from '../external/@radix-ui/react-select/dist/index.js';
import classNames from '../external/classnames/index.js';
import React__default from 'react';
import styles from './select.module.css.js';

const Root = React__default.forwardRef(function SelectRoot(_a, _ref) {
    var { children } = _a, otherProps = __rest(_a, ["children"]);
    return React__default.createElement(Root2, Object.assign({}, otherProps), children);
});
const Trigger = React__default.forwardRef(function Trigger(_a, ref) {
    var { className, children } = _a, otherProps = __rest(_a, ["className", "children"]);
    return (React__default.createElement(Trigger$1, Object.assign({ className: classNames(className, styles.trigger), ref: ref }, otherProps), children));
});
const Value = React__default.forwardRef(function Value(_a, ref) {
    var { children, // NOTE: ignored
    placeholder, className } = _a, otherProps = __rest(_a, ["children", "placeholder", "className"]);
    return (
    // NOTE: this needs a wrapper since Radix strips all styling from RadixSelect.Value
    React__default.createElement("span", Object.assign({ className: classNames(className, styles.value) }, otherProps, { ref: ref }),
        React__default.createElement(Value$1, { placeholder: placeholder })));
});
const Content = React__default.forwardRef(function Content(_a, ref) {
    var { className, children, position = "popper", sideOffset = 4 } = _a, otherProps = __rest(_a, ["className", "children", "position", "sideOffset"]);
    return (React__default.createElement(Portal, null,
        React__default.createElement(Content2, Object.assign({ className: classNames(className, styles.content), ref: ref, position: position, sideOffset: sideOffset }, otherProps),
            React__default.createElement(Select.Viewport, { asChild: true }, children))));
});
const Viewport = React__default.forwardRef(function Viewport(_a, ref) {
    var { className, children } = _a, otherProps = __rest(_a, ["className", "children"]);
    return (React__default.createElement(Viewport$1, Object.assign({ className: classNames(className, styles.viewport), ref: ref }, otherProps), children));
});
const Item = React__default.forwardRef(function Item(_a, ref) {
    var { className, children, value } = _a, otherProps = __rest(_a, ["className", "children", "value"]);
    return (React__default.createElement(Item$1, Object.assign({ className: classNames(className, styles.item), ref: ref, value: value }, otherProps), children));
});
const ItemText = ItemText$1;
const Select = {
    Root,
    Trigger,
    Value,
    Content,
    Viewport,
    Item,
    ItemText,
};

export { Content, Item, ItemText, Root, Select, Trigger, Value, Viewport };
