import { DayFlag } from '../UI.js';

function calculateFocusTarget(days, getModifiers, isSelected, lastFocused) {
    let focusTarget;
    let index = 0;
    let found = false;
    while (index < days.length && !found) {
        const day = days[index];
        const modifiers = getModifiers(day);
        if (!modifiers[DayFlag.disabled] &&
            !modifiers[DayFlag.hidden] &&
            !modifiers[DayFlag.outside]) {
            if (modifiers[DayFlag.focused]) {
                focusTarget = day;
                found = true;
            }
            else if (lastFocused?.isEqualTo(day)) {
                focusTarget = day;
                found = true;
            }
            else if (isSelected(day.date)) {
                focusTarget = day;
                found = true;
            }
            else if (modifiers[DayFlag.today]) {
                focusTarget = day;
                found = true;
            }
        }
        index++;
    }
    if (!focusTarget) {
        // return the first day that is focusable
        focusTarget = days.find((day) => {
            const m = getModifiers(day);
            return !m[DayFlag.disabled] && !m[DayFlag.hidden] && !m[DayFlag.outside];
        });
    }
    return focusTarget;
}

export { calculateFocusTarget };
