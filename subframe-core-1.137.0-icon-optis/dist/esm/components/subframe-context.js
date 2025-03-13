"use client";
import { __rest } from '../_virtual/_tslib.js';
import React__default, { createContext } from 'react';

const SubframeContext = createContext({
    iconType: "eager",
});
const SubframeProvider = (_a) => {
    var { children } = _a, value = __rest(_a, ["children"]);
    return React__default.createElement(SubframeContext.Provider, { value: value }, children);
};

export { SubframeContext, SubframeProvider };
