/// <reference types="react" />
/**
 * First import everything we need
 */
import { RadioGroup, Checkbox, Popover, HoverCard, Tooltip, DropdownMenu, ContextMenu } from "./components/radix";
import { Toaster, toast } from "sonner";
import * as Progress from "./components/progress";
import * as Slider from "./components/slider";
import * as Select from "./components/select";
import { AreaChart } from "./components/area-chart";
import { BarChart } from "./components/bar-chart";
import { LineChart } from "./components/line-chart";
import { PieChart } from "./components/pie-chart";
import { CartesianGrid, XAxis, YAxis, ChartTooltip, ChartLegend, ChartLabel } from "./components/charts";
import { Calendar } from "./components/calendar";
import { Skeleton } from "./components/skeleton";
import * as CopyToClipboard from "./components/copy-to-clipboard";
import * as Switch from "./components/switch";
import { Loader } from "./components/loader";
import type { IconName } from "./generated/iconNames";
import { Icon } from "./components/icon";
import * as Dialog from "./components/dialog";
import * as Drawer from "./components/drawer";
import * as FullScreenDialog from "./components/fullscreen-dialog";
import * as ToggleGroup from "./components/toggle-group";
import * as Collapsible from "./components/collapsible";
import { SubframeProvider } from "./components/subframe-context";
import { Text } from "./utilities/text";
import * as TypescriptHelpers from "./lib/typescript-helpers";
import { twClassNames } from "./lib/tw-classnames";
/**
 * Then re-export everything
 */
export { RadioGroup, Checkbox, Popover, HoverCard, Tooltip, DropdownMenu, ContextMenu };
export { Toaster, toast };
export { Progress };
export { Slider };
export { Select };
export { AreaChart };
export { BarChart };
export { LineChart };
export { PieChart };
export { CartesianGrid, XAxis, YAxis, ChartTooltip, ChartLegend, ChartLabel };
export { Calendar };
export { Skeleton };
export { CopyToClipboard };
export { Switch };
export { Loader };
export { Icon };
export type { IconName };
export { Dialog };
export { Drawer };
export { FullScreenDialog };
export { ToggleGroup };
export { Collapsible };
export { SubframeProvider };
export { Text };
export { TypescriptHelpers };
export { twClassNames };
/**
 * Export all icons
 */
export * from "./assets/icons/final";
/**
 * Finally, create our default export using the imported values
 */
declare const SubframeCore: {
    RadioGroup: typeof RadioGroup;
    Checkbox: typeof Checkbox;
    Popover: typeof Popover;
    HoverCard: typeof HoverCard;
    Tooltip: typeof Tooltip;
    DropdownMenu: typeof DropdownMenu;
    ContextMenu: typeof ContextMenu;
    Toaster: import("react").ForwardRefExoticComponent<import("sonner").ToasterProps & import("react").RefAttributes<HTMLElement>>;
    toast: ((message: import("react").ReactNode | (() => import("react").ReactNode), data?: import("sonner").ExternalToast | undefined) => string | number) & {
        success: (message: string | number | boolean | import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | Iterable<import("react").ReactNode> | import("react").ReactPortal | (() => import("react").ReactNode) | null | undefined, data?: import("sonner").ExternalToast | undefined) => string | number;
        info: (message: string | number | boolean | import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | Iterable<import("react").ReactNode> | import("react").ReactPortal | (() => import("react").ReactNode) | null | undefined, data?: import("sonner").ExternalToast | undefined) => string | number;
        warning: (message: string | number | boolean | import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | Iterable<import("react").ReactNode> | import("react").ReactPortal | (() => import("react").ReactNode) | null | undefined, data?: import("sonner").ExternalToast | undefined) => string | number;
        error: (message: string | number | boolean | import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | Iterable<import("react").ReactNode> | import("react").ReactPortal | (() => import("react").ReactNode) | null | undefined, data?: import("sonner").ExternalToast | undefined) => string | number;
        custom: (jsx: (id: string | number) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>, data?: import("sonner").ExternalToast | undefined) => string | number;
        message: (message: string | number | boolean | import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | Iterable<import("react").ReactNode> | import("react").ReactPortal | (() => import("react").ReactNode) | null | undefined, data?: import("sonner").ExternalToast | undefined) => string | number;
        promise: <ToastData>(promise: Promise<ToastData> | (() => Promise<ToastData>), data?: ({
            className?: string | undefined;
            id?: string | number | undefined;
            style?: import("react").CSSProperties | undefined;
            classNames?: import("sonner").ToastClassnames | undefined;
            icon?: import("react").ReactNode;
            richColors?: boolean | undefined;
            invert?: boolean | undefined;
            closeButton?: boolean | undefined;
            dismissible?: boolean | undefined;
            duration?: number | undefined;
            action?: import("react").ReactNode | import("sonner").Action;
            cancel?: import("react").ReactNode | import("sonner").Action;
            onDismiss?: ((toast: import("sonner").ToastT) => void) | undefined;
            onAutoClose?: ((toast: import("sonner").ToastT) => void) | undefined;
            cancelButtonStyle?: import("react").CSSProperties | undefined;
            actionButtonStyle?: import("react").CSSProperties | undefined;
            unstyled?: boolean | undefined;
            descriptionClassName?: string | undefined;
            position?: ("top-left" | "top-right" | "bottom-left" | "bottom-right" | "top-center" | "bottom-center") | undefined;
        } & {
            loading?: import("react").ReactNode;
            success?: import("react").ReactNode | ((data: ToastData) => import("react").ReactNode | Promise<import("react").ReactNode>);
            error?: import("react").ReactNode | ((data: any) => import("react").ReactNode | Promise<import("react").ReactNode>);
            description?: import("react").ReactNode | ((data: any) => import("react").ReactNode | Promise<import("react").ReactNode>);
            finally?: (() => void | Promise<void>) | undefined;
        }) | undefined) => (string & {
            unwrap: () => Promise<ToastData>;
        }) | (number & {
            unwrap: () => Promise<ToastData>;
        }) | {
            unwrap: () => Promise<ToastData>;
        };
        dismiss: (id?: string | number | undefined) => string | number;
        loading: (message: string | number | boolean | import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | Iterable<import("react").ReactNode> | import("react").ReactPortal | (() => import("react").ReactNode) | null | undefined, data?: import("sonner").ExternalToast | undefined) => string | number;
    } & {
        getHistory: () => (import("sonner").ToastT | import("sonner").ToastToDismiss)[];
    };
    Progress: typeof Progress;
    Slider: typeof Slider;
    Select: typeof Select;
    AreaChart: import("react").ForwardRefExoticComponent<import("./components/area-chart").AreaChartProps & import("react").RefAttributes<HTMLDivElement>>;
    BarChart: import("react").ForwardRefExoticComponent<import("./components/bar-chart").BarChartProps & import("react").RefAttributes<HTMLDivElement>>;
    LineChart: import("react").ForwardRefExoticComponent<import("./components/line-chart").LineChartProps & import("react").RefAttributes<HTMLDivElement>>;
    PieChart: import("react").ForwardRefExoticComponent<import("./components/pie-chart").PieChartProps & import("react").RefAttributes<HTMLDivElement>>;
    CartesianGrid: {
        ({ ref, className, horizontal, vertical, strokeWidth, ...otherProps }: import("recharts").CartesianGridProps): import("react").JSX.Element;
        displayName: string;
    };
    XAxis: {
        (props: import("recharts").XAxisProps): import("react").JSX.Element;
        displayName: string;
        defaultProps: {
            axisLine: boolean;
            tickLine: boolean;
            padding: {
                left: number;
                right: number;
            };
            interval: string;
            allowDecimals: boolean;
            hide: boolean;
            orientation: string;
            width: number;
            height: number;
            mirror: boolean;
            xAxisId: number;
            tickCount: number;
            type: string;
            allowDataOverflow: boolean;
            scale: string;
            reversed: boolean;
            allowDuplicatedCategory: boolean;
        };
    };
    YAxis: {
        (props: import("recharts").YAxisProps): import("react").JSX.Element;
        displayName: string;
        defaultProps: {
            axisLine: boolean;
            tickLine: boolean;
            width: number;
            allowDuplicatedCategory: boolean;
            allowDecimals: boolean;
            hide: boolean;
            orientation: string;
            height: number;
            mirror: boolean;
            yAxisId: number;
            tickCount: number;
            type: string;
            padding: {
                top: number;
                bottom: number;
            };
            allowDataOverflow: boolean;
            scale: string;
            reversed: boolean;
        };
    };
    ChartTooltip: {
        (props: import("recharts").TooltipProps<any, any>): import("react").JSX.Element;
        displayName: string;
        defaultProps: {
            cursor: {
                stroke: string;
                strokeWidth: number;
            };
            isAnimationActive: boolean;
            accessibilityLayer: boolean;
            allowEscapeViewBox: {
                x: boolean;
                y: boolean;
            };
            animationDuration: number;
            animationEasing: string;
            contentStyle: {};
            coordinate: {
                x: number;
                /**
                 * Export all icons
                 */
                y: number;
            };
            cursorStyle: {};
            filterNull: boolean;
            itemStyle: {};
            labelStyle: {};
            offset: number;
            reverseDirection: {
                x: boolean;
                y: boolean;
            };
            separator: string;
            trigger: string;
            useTranslate3d: boolean;
            viewBox: {
                x: number;
                y: number;
                height: number;
                width: number;
            };
            wrapperStyle: {};
        };
    };
    ChartLegend: {
        ({ ref, ...otherProps }: import("recharts").LegendProps): import("react").JSX.Element;
        displayName: string;
        defaultProps: {
            align: string;
            verticalAlign: string;
            iconSize: number;
            layout: string;
        };
    };
    ChartLabel: typeof import("recharts").Label;
    Calendar: import("react").ForwardRefExoticComponent<import("react-day-picker").DayPickerProps & import("react").RefAttributes<HTMLDivElement>>;
    Skeleton: import("react").ForwardRefExoticComponent<import("./components/skeleton").SkeletonProps & import("react").RefAttributes<HTMLDivElement>>;
    CopyToClipboard: typeof CopyToClipboard;
    Switch: typeof Switch;
    Loader: import("react").ForwardRefExoticComponent<import("./components/loader").LoaderProps & import("react").RefAttributes<HTMLDivElement>>;
    Icon: import("react").ForwardRefExoticComponent<import("./components/icon").IconProps & import("react").RefAttributes<HTMLSpanElement>>;
    Dialog: typeof Dialog;
    Drawer: typeof Drawer;
    FullScreenDialog: typeof FullScreenDialog;
    SubframeProvider: ({ children, ...value }: {
        iconType?: "eager" | "experimental_lazy" | undefined;
    } & {
        children?: import("react").ReactNode;
    }) => import("react").JSX.Element;
    ToggleGroup: typeof ToggleGroup;
    Collapsible: typeof Collapsible;
    Text: typeof Text;
    TypescriptHelpers: typeof TypescriptHelpers;
    twClassNames: typeof twClassNames;
};
export default SubframeCore;
//# sourceMappingURL=index.d.ts.map