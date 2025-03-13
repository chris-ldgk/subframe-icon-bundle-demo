import * as React from 'react';

const SvgFeatherCrosshair = (props) => (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React.createElement("circle", { cx: 12, cy: 12, r: 10 }),
    React.createElement("line", { x1: 22, x2: 18, y1: 12, y2: 12 }),
    React.createElement("line", { x1: 6, x2: 2, y1: 12, y2: 12 }),
    React.createElement("line", { x1: 12, x2: 12, y1: 6, y2: 2 }),
    React.createElement("line", { x1: 12, x2: 12, y1: 22, y2: 18 })));

export { SvgFeatherCrosshair as default };
