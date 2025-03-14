import { CalendarDay } from '../classes/CalendarDay.js';
import { CalendarMonth } from '../classes/CalendarMonth.js';
import { CalendarWeek } from '../classes/CalendarWeek.js';

/** Return the months to display in the calendar. */
function getMonths(
/** The months (as dates) to display in the calendar. */
displayMonths, 
/** The dates to display in the calendar. */
dates, 
/** Options from the props context. */
props, dateLib) {
    const { startOfWeek, endOfWeek, startOfISOWeek, endOfISOWeek, endOfMonth, addDays, getWeek, getISOWeek } = dateLib;
    const dayPickerMonths = displayMonths.reduce((months, month) => {
        const firstDateOfFirstWeek = props.ISOWeek
            ? startOfISOWeek(month)
            : startOfWeek(month, {
                locale: props.locale,
                weekStartsOn: props.weekStartsOn
            });
        const lastDateOfLastWeek = props.ISOWeek
            ? endOfISOWeek(endOfMonth(month))
            : endOfWeek(endOfMonth(month), {
                locale: props.locale,
                weekStartsOn: props.weekStartsOn
            });
        /** The dates to display in the month. */
        const monthDates = dates.filter((date) => {
            return date >= firstDateOfFirstWeek && date <= lastDateOfLastWeek;
        });
        if (props.fixedWeeks && monthDates.length < 42) {
            const extraDates = dates.filter((date) => {
                return (date > lastDateOfLastWeek && date <= addDays(lastDateOfLastWeek, 7));
            });
            monthDates.push(...extraDates);
        }
        const weeks = monthDates.reduce((weeks, date) => {
            const weekNumber = props.ISOWeek
                ? getISOWeek(date)
                : getWeek(date, {
                    locale: props.locale,
                    weekStartsOn: props.weekStartsOn,
                    firstWeekContainsDate: props.firstWeekContainsDate
                });
            const week = weeks.find((week) => week.weekNumber === weekNumber);
            const day = new CalendarDay(date, month, dateLib);
            if (!week) {
                weeks.push(new CalendarWeek(weekNumber, [day]));
            }
            else {
                week.days.push(day);
            }
            return weeks;
        }, []);
        const dayPickerMonth = new CalendarMonth(month, weeks);
        months.push(dayPickerMonth);
        return months;
    }, []);
    if (!props.reverseMonths) {
        return dayPickerMonths;
    }
    else {
        return dayPickerMonths.reverse();
    }
}

export { getMonths };
