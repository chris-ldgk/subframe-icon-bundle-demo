/** Return the `data-` attributes from the props. */
function getDataAttributes(props) {
    const dataAttributes = {
        "data-mode": props.mode ?? undefined,
        "data-required": "required" in props ? props.required : undefined,
        "data-multiple-months": (props.numberOfMonths && props.numberOfMonths > 1) || undefined,
        "data-week-numbers": props.showWeekNumber || undefined
    };
    Object.entries(props).forEach(([key, val]) => {
        if (key.startsWith("data-")) {
            dataAttributes[key] = val;
        }
    });
    return dataAttributes;
}

export { getDataAttributes };
