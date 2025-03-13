import * as React from 'react';

const SvgFeatherFactory = (props) => (React.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, props),
    React.createElement("path", { d: "M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" }),
    React.createElement("path", { d: "M17 18h1" }),
    React.createElement("path", { d: "M12 18h1" }),
    React.createElement("path", { d: "M7 18h1" })));

export { SvgFeatherFactory as default };
