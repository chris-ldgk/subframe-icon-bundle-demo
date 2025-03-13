import classNames from '../external/classnames/index.js';
import { createTailwindMerge, getDefaultConfig } from '../external/tailwind-merge/dist/bundle-mjs.js';

// HACK: keep this in sync with the default fonts
const SUBFRAME_FONT_MIXINS = [
    // old font mixins
    "text-label",
    "text-label-bold",
    "text-body",
    "text-body-bold",
    "text-subheader",
    "text-section-header",
    "text-header",
    "text-monospace-body",
    // new font mixins
    "text-caption",
    "text-caption-bold",
    "text-heading-3",
    "text-heading-2",
    "text-heading-1",
];
const customTWMerge = createTailwindMerge(() => {
    const defaultConfig = getDefaultConfig();
    return Object.assign(Object.assign({}, defaultConfig), { classGroups: Object.assign(Object.assign({}, defaultConfig.classGroups), { 
            // "subframe-colors": [{ text: [isTextColor] }],
            "subframe-font-mixins": SUBFRAME_FONT_MIXINS }), conflictingClassGroups: {
            // font colors
            // "text-color": ["subframe-colors"],
            // font mixins
            "subframe-font-mixins": ["font-size", "leading", "font-weight"],
            "font-size": ["subframe-font-mixins"],
            leading: ["subframe-font-mixins"],
            "font-weight": ["subframe-font-mixins"],
        } });
});
function twClassNames(...args) {
    return customTWMerge(classNames(...args));
}

export { SUBFRAME_FONT_MIXINS, twClassNames };
