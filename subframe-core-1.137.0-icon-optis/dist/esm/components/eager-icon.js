import { __rest } from '../_virtual/_tslib.js';
import React__default, { forwardRef } from 'react';
import * as index from '../assets/icons/final/index.js';
import { EmptyIcon } from './icon.js';

const EagerIcon = forwardRef((props, ref) => {
    const { name } = props, otherProps = __rest(props, ["name"]);
    let children = null;
    if (name === null) {
        children = null;
    }
    else if (name === "empty") {
        children = React__default.createElement(EmptyIcon, null);
    }
    else {
        const Icon = index[name];
        if (!Icon) {
            console.warn(`Icon "${name}" not found.`);
            children = React__default.createElement(EmptyIcon, null);
        }
        children = React__default.createElement(Icon, null);
    }
    return (React__default.createElement("span", Object.assign({ ref: ref }, otherProps), children));
});

export { EagerIcon, EagerIcon as default };
