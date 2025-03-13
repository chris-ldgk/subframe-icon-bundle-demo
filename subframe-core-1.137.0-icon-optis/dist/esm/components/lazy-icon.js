import { __rest } from '../_virtual/_tslib.js';
import dashify from '../external/dashify/index.js';
import React__default, { lazy, Suspense } from 'react';
import { iconNames } from '../generated/iconNames.js';
import { EmptyIcon } from './icon.js';

const iconMap = Object.fromEntries(iconNames.map((name) => {
    const fileName = dashify(name.replace(/_/g, "-"), { condense: true });
    return [name, lazy(() => import(`../assets/icons/final/${fileName}.js`))];
}));
const LazyIcon = React__default.forwardRef((props, ref) => {
    const { name } = props, otherProps = __rest(props, ["name"]);
    let children = null;
    if (name === null) {
        children = null;
    }
    else if (name === "empty") {
        children = React__default.createElement(EmptyIcon, null);
    }
    else {
        const Icon = iconMap[name];
        if (!Icon) {
            console.warn(`Icon "${name}" not found.`);
            children = React__default.createElement(EmptyIcon, null);
        }
        children = React__default.createElement(Icon, null);
    }
    return (React__default.createElement("span", Object.assign({ ref: ref }, otherProps),
        React__default.createElement(Suspense, { fallback: React__default.createElement(EmptyIcon, null) }, children)));
});

export { LazyIcon, LazyIcon as default };
