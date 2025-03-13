"use client";
'use strict';

var _tslib = require('../_virtual/_tslib.js');
var React = require('react');
var DayPicker = require('../external/react-day-picker/dist/esm/DayPicker.js');
require('../external/react-day-picker/dist/esm/useDayPicker.js');
require('../external/react-day-picker/dist/esm/UI.js');
var icon = require('./icon.js');

const Calendar = React.forwardRef(function CalendarRoot(_a, ref) {
    var { classNames, className, showOutsideDays = true } = _a, otherProps = _tslib.__rest(_a, ["classNames", "className", "showOutsideDays"]);
    return (React.createElement("div", { className: className, ref: ref },
        React.createElement(DayPicker.DayPicker, Object.assign({ components: {
                Chevron: (props) => {
                    if (props.orientation === "left") {
                        return React.createElement(icon.Icon, Object.assign({ name: "FeatherChevronLeft" }, props));
                    }
                    return React.createElement(icon.Icon, Object.assign({ name: "FeatherChevronRight" }, props));
                },
            }, showOutsideDays: showOutsideDays, classNames: classNames }, otherProps))));
});

exports.Calendar = Calendar;
