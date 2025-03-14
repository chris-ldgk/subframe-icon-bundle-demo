import { getDates } from './helpers/getDates.js';
import { getDays } from './helpers/getDays.js';
import { getDisplayMonths } from './helpers/getDisplayMonths.js';
import { getInitialMonth } from './helpers/getInitialMonth.js';
import { getMonths } from './helpers/getMonths.js';
import { getNavMonths } from './helpers/getNavMonth.js';
import { getNextMonth } from './helpers/getNextMonth.js';
import { getPreviousMonth } from './helpers/getPreviousMonth.js';
import { getWeeks } from './helpers/getWeeks.js';
import { useControlledValue } from './helpers/useControlledValue.js';

/** @private */
function useCalendar(props, dateLib) {
    const [navStart, navEnd] = getNavMonths(props, dateLib);
    const { startOfMonth, endOfMonth } = dateLib;
    const initialDisplayMonth = getInitialMonth(props, dateLib);
    // The first month displayed in the calendar
    const [firstMonth, setFirstMonth] = useControlledValue(initialDisplayMonth, props.month ? startOfMonth(props.month) : undefined);
    /** The months displayed in the calendar. */
    const displayMonths = getDisplayMonths(firstMonth, navEnd, props, dateLib);
    /** The dates displayed in the calendar. */
    const dates = getDates(displayMonths, props.endMonth ? endOfMonth(props.endMonth) : undefined, props, dateLib);
    /** The Months displayed in the calendar. */
    const months = getMonths(displayMonths, dates, props, dateLib);
    /** The Weeks displayed in the calendar. */
    const weeks = getWeeks(months);
    /** The Days displayed in the calendar. */
    const days = getDays(months);
    const previousMonth = getPreviousMonth(firstMonth, navStart, props, dateLib);
    const nextMonth = getNextMonth(firstMonth, navEnd, props, dateLib);
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

export { useCalendar };
