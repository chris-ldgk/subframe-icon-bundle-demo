import React, { HTMLAttributes } from "react";
import { type IconName } from "../generated/iconNames";
export interface LazyIconProps extends HTMLAttributes<HTMLSpanElement> {
    name: IconName;
}
export declare const LazyIcon: React.ForwardRefExoticComponent<LazyIconProps & React.RefAttributes<HTMLSpanElement>>;
export default LazyIcon;
//# sourceMappingURL=lazy-icon.d.ts.map