import * as React from 'react';

const SvgFeatherMove = (props) => (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React.createElement("polyline", { points: "5 9 2 12 5 15" }),
    React.createElement("polyline", { points: "9 5 12 2 15 5" }),
    React.createElement("polyline", { points: "15 19 12 22 9 19" }),
    React.createElement("polyline", { points: "19 9 22 12 19 15" }),
    React.createElement("line", { x1: 2, x2: 22, y1: 12, y2: 12 }),
    React.createElement("line", { x1: 12, x2: 12, y1: 2, y2: 22 })));

export { SvgFeatherMove as default };
