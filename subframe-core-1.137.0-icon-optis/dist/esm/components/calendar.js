"use client";
import { __rest } from '../_virtual/_tslib.js';
import React__default from 'react';
import { DayPicker } from '../external/react-day-picker/dist/esm/DayPicker.js';
import '../external/react-day-picker/dist/esm/useDayPicker.js';
import '../external/react-day-picker/dist/esm/UI.js';
import { Icon } from './icon.js';

const Calendar = React__default.forwardRef(function CalendarRoot(_a, ref) {
    var { classNames, className, showOutsideDays = true } = _a, otherProps = __rest(_a, ["classNames", "className", "showOutsideDays"]);
    return (React__default.createElement("div", { className: className, ref: ref },
        React__default.createElement(DayPicker, Object.assign({ components: {
                Chevron: (props) => {
                    if (props.orientation === "left") {
                        return React__default.createElement(Icon, Object.assign({ name: "FeatherChevronLeft" }, props));
                    }
                    return React__default.createElement(Icon, Object.assign({ name: "FeatherChevronRight" }, props));
                },
            }, showOutsideDays: showOutsideDays, classNames: classNames }, otherProps))));
});

export { Calendar };
