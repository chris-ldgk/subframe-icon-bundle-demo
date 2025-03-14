'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var locale$1 = require('./locale.js');

var locale;
exports.timeFormat = void 0;
exports.utcFormat = void 0;

defaultLocale({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});

function defaultLocale(definition) {
  locale = locale$1(definition);
  exports.timeFormat = locale.format;
  locale.parse;
  exports.utcFormat = locale.utcFormat;
  locale.utcParse;
  return locale;
}

exports.default = defaultLocale;
