"use client";
'use strict';

var React = require('react');
var index$6 = require('../../primitive/dist/index.js');
var index$4 = require('../../react-compose-refs/dist/index.js');
var index = require('../../react-context/dist/index.js');
var index$d = require('../../react-dismissable-layer/dist/index.js');
var index$b = require('../../react-focus-guards/dist/index.js');
var index$c = require('../../react-focus-scope/dist/index.js');
var index$3 = require('../../react-id/dist/index.js');
var index$1 = require('../../react-popper/dist/index.js');
var index$8 = require('../../react-portal/dist/index.js');
var index$7 = require('../../react-presence/dist/index.js');
var index$5 = require('../../react-primitive/dist/index.js');
var index$a = require('../../react-slot/dist/index.js');
var index$2 = require('../../react-use-controllable-state/dist/index.js');
var index$9 = require('../../../aria-hidden/dist/es2015/index.js');
var Combination = require('../external/react-remove-scroll/dist/es2015/Combination.js');
var jsxRuntime = require('react/jsx-runtime');

function _interopNamespaceDefault(e) {
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespaceDefault(React);

var POPOVER_NAME = "Popover";
var [createPopoverContext, createPopoverScope] = index.createContextScope(POPOVER_NAME, [
  index$1.createPopperScope
]);
var usePopperScope = index$1.createPopperScope();
var [PopoverProvider, usePopoverContext] = createPopoverContext(POPOVER_NAME);
var Popover = (props) => {
  const {
    __scopePopover,
    children,
    open: openProp,
    defaultOpen,
    onOpenChange,
    modal = false
  } = props;
  const popperScope = usePopperScope(__scopePopover);
  const triggerRef = React__namespace.useRef(null);
  const [hasCustomAnchor, setHasCustomAnchor] = React__namespace.useState(false);
  const [open = false, setOpen] = index$2.useControllableState({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange
  });
  return /* @__PURE__ */ jsxRuntime.jsx(index$1.Root, { ...popperScope, children: /* @__PURE__ */ jsxRuntime.jsx(
    PopoverProvider,
    {
      scope: __scopePopover,
      contentId: index$3.useId(),
      triggerRef,
      open,
      onOpenChange: setOpen,
      onOpenToggle: React__namespace.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
      hasCustomAnchor,
      onCustomAnchorAdd: React__namespace.useCallback(() => setHasCustomAnchor(true), []),
      onCustomAnchorRemove: React__namespace.useCallback(() => setHasCustomAnchor(false), []),
      modal,
      children
    }
  ) });
};
Popover.displayName = POPOVER_NAME;
var ANCHOR_NAME = "PopoverAnchor";
var PopoverAnchor = React__namespace.forwardRef(
  (props, forwardedRef) => {
    const { __scopePopover, ...anchorProps } = props;
    const context = usePopoverContext(ANCHOR_NAME, __scopePopover);
    const popperScope = usePopperScope(__scopePopover);
    const { onCustomAnchorAdd, onCustomAnchorRemove } = context;
    React__namespace.useEffect(() => {
      onCustomAnchorAdd();
      return () => onCustomAnchorRemove();
    }, [onCustomAnchorAdd, onCustomAnchorRemove]);
    return /* @__PURE__ */ jsxRuntime.jsx(index$1.Anchor, { ...popperScope, ...anchorProps, ref: forwardedRef });
  }
);
PopoverAnchor.displayName = ANCHOR_NAME;
var TRIGGER_NAME = "PopoverTrigger";
var PopoverTrigger = React__namespace.forwardRef(
  (props, forwardedRef) => {
    const { __scopePopover, ...triggerProps } = props;
    const context = usePopoverContext(TRIGGER_NAME, __scopePopover);
    const popperScope = usePopperScope(__scopePopover);
    const composedTriggerRef = index$4.useComposedRefs(forwardedRef, context.triggerRef);
    const trigger = /* @__PURE__ */ jsxRuntime.jsx(
      index$5.Primitive.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": context.open,
        "aria-controls": context.contentId,
        "data-state": getState(context.open),
        ...triggerProps,
        ref: composedTriggerRef,
        onClick: index$6.composeEventHandlers(props.onClick, context.onOpenToggle)
      }
    );
    return context.hasCustomAnchor ? trigger : /* @__PURE__ */ jsxRuntime.jsx(index$1.Anchor, { asChild: true, ...popperScope, children: trigger });
  }
);
PopoverTrigger.displayName = TRIGGER_NAME;
var PORTAL_NAME = "PopoverPortal";
var [PortalProvider, usePortalContext] = createPopoverContext(PORTAL_NAME, {
  forceMount: void 0
});
var PopoverPortal = (props) => {
  const { __scopePopover, forceMount, children, container } = props;
  const context = usePopoverContext(PORTAL_NAME, __scopePopover);
  return /* @__PURE__ */ jsxRuntime.jsx(PortalProvider, { scope: __scopePopover, forceMount, children: /* @__PURE__ */ jsxRuntime.jsx(index$7.Presence, { present: forceMount || context.open, children: /* @__PURE__ */ jsxRuntime.jsx(index$8.Portal, { asChild: true, container, children }) }) });
};
PopoverPortal.displayName = PORTAL_NAME;
var CONTENT_NAME = "PopoverContent";
var PopoverContent = React__namespace.forwardRef(
  (props, forwardedRef) => {
    const portalContext = usePortalContext(CONTENT_NAME, props.__scopePopover);
    const { forceMount = portalContext.forceMount, ...contentProps } = props;
    const context = usePopoverContext(CONTENT_NAME, props.__scopePopover);
    return /* @__PURE__ */ jsxRuntime.jsx(index$7.Presence, { present: forceMount || context.open, children: context.modal ? /* @__PURE__ */ jsxRuntime.jsx(PopoverContentModal, { ...contentProps, ref: forwardedRef }) : /* @__PURE__ */ jsxRuntime.jsx(PopoverContentNonModal, { ...contentProps, ref: forwardedRef }) });
  }
);
PopoverContent.displayName = CONTENT_NAME;
var PopoverContentModal = React__namespace.forwardRef(
  (props, forwardedRef) => {
    const context = usePopoverContext(CONTENT_NAME, props.__scopePopover);
    const contentRef = React__namespace.useRef(null);
    const composedRefs = index$4.useComposedRefs(forwardedRef, contentRef);
    const isRightClickOutsideRef = React__namespace.useRef(false);
    React__namespace.useEffect(() => {
      const content = contentRef.current;
      if (content) return index$9.hideOthers(content);
    }, []);
    return /* @__PURE__ */ jsxRuntime.jsx(Combination, { as: index$a.Slot, allowPinchZoom: true, children: /* @__PURE__ */ jsxRuntime.jsx(
      PopoverContentImpl,
      {
        ...props,
        ref: composedRefs,
        trapFocus: context.open,
        disableOutsidePointerEvents: true,
        onCloseAutoFocus: index$6.composeEventHandlers(props.onCloseAutoFocus, (event) => {
          event.preventDefault();
          if (!isRightClickOutsideRef.current) context.triggerRef.current?.focus();
        }),
        onPointerDownOutside: index$6.composeEventHandlers(
          props.onPointerDownOutside,
          (event) => {
            const originalEvent = event.detail.originalEvent;
            const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
            const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
            isRightClickOutsideRef.current = isRightClick;
          },
          { checkForDefaultPrevented: false }
        ),
        onFocusOutside: index$6.composeEventHandlers(
          props.onFocusOutside,
          (event) => event.preventDefault(),
          { checkForDefaultPrevented: false }
        )
      }
    ) });
  }
);
var PopoverContentNonModal = React__namespace.forwardRef(
  (props, forwardedRef) => {
    const context = usePopoverContext(CONTENT_NAME, props.__scopePopover);
    const hasInteractedOutsideRef = React__namespace.useRef(false);
    const hasPointerDownOutsideRef = React__namespace.useRef(false);
    return /* @__PURE__ */ jsxRuntime.jsx(
      PopoverContentImpl,
      {
        ...props,
        ref: forwardedRef,
        trapFocus: false,
        disableOutsidePointerEvents: false,
        onCloseAutoFocus: (event) => {
          props.onCloseAutoFocus?.(event);
          if (!event.defaultPrevented) {
            if (!hasInteractedOutsideRef.current) context.triggerRef.current?.focus();
            event.preventDefault();
          }
          hasInteractedOutsideRef.current = false;
          hasPointerDownOutsideRef.current = false;
        },
        onInteractOutside: (event) => {
          props.onInteractOutside?.(event);
          if (!event.defaultPrevented) {
            hasInteractedOutsideRef.current = true;
            if (event.detail.originalEvent.type === "pointerdown") {
              hasPointerDownOutsideRef.current = true;
            }
          }
          const target = event.target;
          const targetIsTrigger = context.triggerRef.current?.contains(target);
          if (targetIsTrigger) event.preventDefault();
          if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.current) {
            event.preventDefault();
          }
        }
      }
    );
  }
);
var PopoverContentImpl = React__namespace.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopePopover,
      trapFocus,
      onOpenAutoFocus,
      onCloseAutoFocus,
      disableOutsidePointerEvents,
      onEscapeKeyDown,
      onPointerDownOutside,
      onFocusOutside,
      onInteractOutside,
      ...contentProps
    } = props;
    const context = usePopoverContext(CONTENT_NAME, __scopePopover);
    const popperScope = usePopperScope(__scopePopover);
    index$b.useFocusGuards();
    return /* @__PURE__ */ jsxRuntime.jsx(
      index$c.FocusScope,
      {
        asChild: true,
        loop: true,
        trapped: trapFocus,
        onMountAutoFocus: onOpenAutoFocus,
        onUnmountAutoFocus: onCloseAutoFocus,
        children: /* @__PURE__ */ jsxRuntime.jsx(
          index$d.DismissableLayer,
          {
            asChild: true,
            disableOutsidePointerEvents,
            onInteractOutside,
            onEscapeKeyDown,
            onPointerDownOutside,
            onFocusOutside,
            onDismiss: () => context.onOpenChange(false),
            children: /* @__PURE__ */ jsxRuntime.jsx(
              index$1.Content,
              {
                "data-state": getState(context.open),
                role: "dialog",
                id: context.contentId,
                ...popperScope,
                ...contentProps,
                ref: forwardedRef,
                style: {
                  ...contentProps.style,
                  // re-namespace exposed content custom properties
                  ...{
                    "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                    "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                    "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                    "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                    "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                  }
                }
              }
            )
          }
        )
      }
    );
  }
);
var CLOSE_NAME = "PopoverClose";
var PopoverClose = React__namespace.forwardRef(
  (props, forwardedRef) => {
    const { __scopePopover, ...closeProps } = props;
    const context = usePopoverContext(CLOSE_NAME, __scopePopover);
    return /* @__PURE__ */ jsxRuntime.jsx(
      index$5.Primitive.button,
      {
        type: "button",
        ...closeProps,
        ref: forwardedRef,
        onClick: index$6.composeEventHandlers(props.onClick, () => context.onOpenChange(false))
      }
    );
  }
);
PopoverClose.displayName = CLOSE_NAME;
var ARROW_NAME = "PopoverArrow";
var PopoverArrow = React__namespace.forwardRef(
  (props, forwardedRef) => {
    const { __scopePopover, ...arrowProps } = props;
    const popperScope = usePopperScope(__scopePopover);
    return /* @__PURE__ */ jsxRuntime.jsx(index$1.Arrow, { ...popperScope, ...arrowProps, ref: forwardedRef });
  }
);
PopoverArrow.displayName = ARROW_NAME;
function getState(open) {
  return open ? "open" : "closed";
}
var Root2 = Popover;
var Anchor2 = PopoverAnchor;
var Trigger = PopoverTrigger;
var Portal = PopoverPortal;
var Content2 = PopoverContent;
var Close = PopoverClose;
var Arrow2 = PopoverArrow;

exports.Anchor = Anchor2;
exports.Arrow = Arrow2;
exports.Close = Close;
exports.Content = Content2;
exports.Popover = Popover;
exports.PopoverAnchor = PopoverAnchor;
exports.PopoverArrow = PopoverArrow;
exports.PopoverClose = PopoverClose;
exports.PopoverContent = PopoverContent;
exports.PopoverPortal = PopoverPortal;
exports.PopoverTrigger = PopoverTrigger;
exports.Portal = Portal;
exports.Root = Root2;
exports.Trigger = Trigger;
exports.createPopoverScope = createPopoverScope;
