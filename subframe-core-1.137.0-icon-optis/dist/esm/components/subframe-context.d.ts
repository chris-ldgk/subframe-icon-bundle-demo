import React, { PropsWithChildren } from "react";
export type SubframeContextProps = {
    iconType?: "eager" | "experimental_lazy";
} | undefined;
export declare const SubframeContext: React.Context<SubframeContextProps>;
export declare const SubframeProvider: ({ children, ...value }: PropsWithChildren<SubframeContextProps>) => React.JSX.Element;
//# sourceMappingURL=subframe-context.d.ts.map