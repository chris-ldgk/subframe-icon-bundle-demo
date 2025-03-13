'use strict';

var getDates = require('./helpers/getDates.js');
var getDays = require('./helpers/getDays.js');
var getDisplayMonths = require('./helpers/getDisplayMonths.js');
var getInitialMonth = require('./helpers/getInitialMonth.js');
var getMonths = require('./helpers/getMonths.js');
var getNavMonth = require('./helpers/getNavMonth.js');
var getNextMonth = require('./helpers/getNextMonth.js');
var getPreviousMonth = require('./helpers/getPreviousMonth.js');
var getWeeks = require('./helpers/getWeeks.js');
var useControlledValue = require('./helpers/useControlledValue.js');

/** @private */
function useCalendar(props, dateLib) {
    const [navStart, navEnd] = getNavMonth.getNavMonths(props, dateLib);
    const { startOfMonth, endOfMonth } = dateLib;
    const initialDisplayMonth = getInitialMonth.getInitialMonth(props, dateLib);
    // The first month displayed in the calendar
    const [firstMonth, setFirstMonth] = useControlledValue.useControlledValue(initialDisplayMonth, props.month ? startOfMonth(props.month) : undefined);
    /** The months displayed in the calendar. */
    const displayMonths = getDisplayMonths.getDisplayMonths(firstMonth, navEnd, props, dateLib);
    /** The dates displayed in the calendar. */
    const dates = getDates.getDates(displayMonths, props.endMonth ? endOfMonth(props.endMonth) : undefined, props, dateLib);
    /** The Months displayed in the calendar. */
    const months = getMonths.getMonths(displayMonths, dates, props, dateLib);
    /** The Weeks displayed in the calendar. */
    const weeks = getWeeks.getWeeks(months);
    /** The Days displayed in the calendar. */
    const days = getDays.getDays(months);
    const previousMonth = getPreviousMonth.getPreviousMonth(firstMonth, navStart, props, dateLib);
    const nextMonth = getNextMonth.getNextMonth(firstMonth, navEnd, props, dateLib);
    const { disableNavigation, onMonthChange } = props;
    const isDayInCalendar = (day) => weeks.some((week) => week.days.some((d) => d.isEqualTo(day)));
    const goToMonth = (date) => {
        if (disableNavigation) {
            return;
        }
        let newMonth = startOfMonth(date);
        // if month is before start, use the first month instead
        if (navStart && newMonth < startOfMonth(navStart)) {
            newMonth = startOfMonth(navStart);
        }
        // if month is after endMonth, use the last month instead
        if (navEnd && newMonth > startOfMonth(navEnd)) {
            newMonth = startOfMonth(navEnd);
        }
        setFirstMonth(newMonth);
        onMonthChange?.(newMonth);
    };
    const goToDay = (day) => {
        // is this check necessary?
        if (isDayInCalendar(day)) {
            return;
        }
        goToMonth(day.date);
    };
    const calendar = {
        months,
        weeks,
        days,
        navStart,
        navEnd,
        previousMonth,
        nextMonth,
        goToMonth,
        goToDay
    };
    return calendar;
}

exports.useCalendar = useCalendar;
