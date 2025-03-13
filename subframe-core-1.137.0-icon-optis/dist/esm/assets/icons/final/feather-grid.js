import * as React from 'react';

const SvgFeatherGrid = (props) => (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React.createElement("rect", { x: 3, y: 3, width: 18, height: 18, rx: 2, ry: 2 }),
    React.createElement("line", { x1: 3, y1: 9, x2: 21, y2: 9 }),
    React.createElement("line", { x1: 3, y1: 15, x2: 21, y2: 15 }),
    React.createElement("line", { x1: 9, y1: 3, x2: 9, y2: 21 }),
    React.createElement("line", { x1: 15, y1: 3, x2: 15, y2: 21 })));

export { SvgFeatherGrid as default };
