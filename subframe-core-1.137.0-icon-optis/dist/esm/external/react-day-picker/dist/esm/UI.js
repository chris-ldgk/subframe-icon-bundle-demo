/**
 * The UI elements composing DayPicker. These elements are mapped to
 * {@link CustomComponents}, the {@link ClassNames} and the {@link Styles} used by
 * DayPicker.
 *
 * Some of these elements are extended by flags and modifiers.
 */
var UI;
(function (UI) {
    /** The previous button in the navigation. */
    UI["ButtonPrevious"] = "button_previous";
    /** The next button the navigation. */
    UI["ButtonNext"] = "button_next";
    /** The root component displaying the months and the navigation bar. */
    UI["Root"] = "root";
    /** The Chevron SVG element used by navigation buttons and dropdowns. */
    UI["Chevron"] = "chevron";
    /**
     * The grid cell with the day's date. Extended by {@link DayFlag} and
     * {@link SelectionFlag}.
     */
    UI["Day"] = "day";
    /** The button containing the formatted day's date, inside the grid cell. */
    UI["DayButton"] = "day_button";
    /** The caption label of the month (when not showing the dropdown navigation). */
    UI["CaptionLabel"] = "caption_label";
    /** The container of the dropdown navigation (when enabled). */
    UI["Dropdowns"] = "dropdowns";
    /** The dropdown element to select for years and months. */
    UI["Dropdown"] = "dropdown";
    /** The container element of the dropdown. */
    UI["DropdownRoot"] = "dropdown_root";
    /** The root element of the footer. */
    UI["Footer"] = "footer";
    /** The month grid. */
    UI["MonthGrid"] = "month_grid";
    /** Contains the dropdown navigation or the caption label. */
    UI["MonthCaption"] = "month_caption";
    /** The dropdown with the months. */
    UI["MonthsDropdown"] = "months_dropdown";
    /** Wrapper of the month grid. */
    UI["Month"] = "month";
    /** The container of the displayed months. */
    UI["Months"] = "months";
    /** The navigation bar with the previous and next buttons. */
    UI["Nav"] = "nav";
    /** The row containing the week. */
    UI["Week"] = "week";
    /** The group of row weeks in a month (`tbody`). */
    UI["Weeks"] = "weeks";
    /** The column header with the weekday. */
    UI["Weekday"] = "weekday";
    /** The row grouping the weekdays in the column headers. */
    UI["Weekdays"] = "weekdays";
    /** The cell containing the week number. */
    UI["WeekNumber"] = "week_number";
    /** The cell header of the week numbers column. */
    UI["WeekNumberHeader"] = "week_number_header";
    /** The dropdown with the years. */
    UI["YearsDropdown"] = "years_dropdown";
})(UI || (UI = {}));
/** The flags for the {@link UI.Day}. */
var DayFlag;
(function (DayFlag) {
    /** The day is disabled. */
    DayFlag["disabled"] = "disabled";
    /** The day is hidden. */
    DayFlag["hidden"] = "hidden";
    /** The day is outside the current month. */
    DayFlag["outside"] = "outside";
    /** The day is focused. */
    DayFlag["focused"] = "focused";
    /** The day is today. */
    DayFlag["today"] = "today";
})(DayFlag || (DayFlag = {}));
/**
 * The state that can be applied to the {@link UI.Day} element when in selection
 * mode.
 */
var SelectionState;
(function (SelectionState) {
    /** The day is at the end of a selected range. */
    SelectionState["range_end"] = "range_end";
    /** The day is at the middle of a selected range. */
    SelectionState["range_middle"] = "range_middle";
    /** The day is at the start of a selected range. */
    SelectionState["range_start"] = "range_start";
    /** The day is selected. */
    SelectionState["selected"] = "selected";
})(SelectionState || (SelectionState = {}));

export { DayFlag, SelectionState, UI };
