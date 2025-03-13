import React, { HTMLAttributes, ReactNode } from "react";
import type { IconName } from "../generated/iconNames";
export declare const EmptyIcon: () => React.JSX.Element;
export type IconProps = HTMLAttributes<HTMLSpanElement> & ({
    name: IconName;
    icon?: undefined;
} | {
    icon: ReactNode;
    name?: undefined;
});
export declare const Icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<HTMLSpanElement>>;
//# sourceMappingURL=icon.d.ts.map