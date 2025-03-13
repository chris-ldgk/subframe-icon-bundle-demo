import * as React from 'react';

const SvgFeatherSnowflake = (props) => (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React.createElement("line", { x1: 2, x2: 22, y1: 12, y2: 12 }),
    React.createElement("line", { x1: 12, x2: 12, y1: 2, y2: 22 }),
    React.createElement("path", { d: "m20 16-4-4 4-4" }),
    React.createElement("path", { d: "m4 8 4 4-4 4" }),
    React.createElement("path", { d: "m16 4-4 4-4-4" }),
    React.createElement("path", { d: "m8 20 4-4 4 4" })));

export { SvgFeatherSnowflake as default };
