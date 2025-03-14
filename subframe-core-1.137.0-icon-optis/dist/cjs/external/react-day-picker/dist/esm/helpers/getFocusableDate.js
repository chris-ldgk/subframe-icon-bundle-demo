'use strict';

/** Return the next date that should be focused. */
function getFocusableDate(moveBy, moveDir, refDate, navStart, navEnd, props, dateLib) {
    const { weekStartsOn, locale, ISOWeek } = props;
    const { addDays, addMonths, addYears, addWeeks, startOfISOWeek, endOfISOWeek, startOfWeek, endOfWeek, max, min } = dateLib;
    const moveFns = {
        day: addDays,
        week: addWeeks,
        month: addMonths,
        year: addYears,
        startOfWeek: (date) => ISOWeek
            ? startOfISOWeek(date)
            : startOfWeek(date, { locale, weekStartsOn }),
        endOfWeek: (date) => ISOWeek ? endOfISOWeek(date) : endOfWeek(date, { locale, weekStartsOn })
    };
    let focusableDate = moveFns[moveBy](refDate, moveDir === "after" ? 1 : -1);
    if (moveDir === "before" && navStart) {
        focusableDate = max([navStart, focusableDate]);
    }
    else if (moveDir === "after" && navEnd) {
        focusableDate = min([navEnd, focusableDate]);
    }
    return focusableDate;
}

exports.getFocusableDate = getFocusableDate;
