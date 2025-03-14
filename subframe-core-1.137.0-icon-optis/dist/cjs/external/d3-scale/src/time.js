'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var continuous = require('./continuous.js');
var init = require('./init.js');
var nice = require('./nice.js');
var defaultLocale = require('../../d3-time-format/src/defaultLocale.js');
var second = require('../../d3-time/src/second.js');
var minute = require('../../d3-time/src/minute.js');
var hour = require('../../d3-time/src/hour.js');
var day = require('../../d3-time/src/day.js');
var week = require('../../d3-time/src/week.js');
var month = require('../../d3-time/src/month.js');
var year = require('../../d3-time/src/year.js');
var ticks = require('../../d3-time/src/ticks.js');

function date(t) {
  return new Date(t);
}

function number(t) {
  return t instanceof Date ? +t : +new Date(+t);
}

function calendar(ticks, tickInterval, year, month, week, day, hour, minute, second, format) {
  var scale = continuous.default(),
      invert = scale.invert,
      domain = scale.domain;

  var formatMillisecond = format(".%L"),
      formatSecond = format(":%S"),
      formatMinute = format("%I:%M"),
      formatHour = format("%I %p"),
      formatDay = format("%a %d"),
      formatWeek = format("%b %d"),
      formatMonth = format("%B"),
      formatYear = format("%Y");

  function tickFormat(date) {
    return (second(date) < date ? formatMillisecond
        : minute(date) < date ? formatSecond
        : hour(date) < date ? formatMinute
        : day(date) < date ? formatHour
        : month(date) < date ? (week(date) < date ? formatDay : formatWeek)
        : year(date) < date ? formatMonth
        : formatYear)(date);
  }

  scale.invert = function(y) {
    return new Date(invert(y));
  };

  scale.domain = function(_) {
    return arguments.length ? domain(Array.from(_, number)) : domain().map(date);
  };

  scale.ticks = function(interval) {
    var d = domain();
    return ticks(d[0], d[d.length - 1], interval == null ? 10 : interval);
  };

  scale.tickFormat = function(count, specifier) {
    return specifier == null ? tickFormat : format(specifier);
  };

  scale.nice = function(interval) {
    var d = domain();
    if (!interval || typeof interval.range !== "function") interval = tickInterval(d[0], d[d.length - 1], interval == null ? 10 : interval);
    return interval ? domain(nice(d, interval)) : scale;
  };

  scale.copy = function() {
    return continuous.copy(scale, calendar(ticks, tickInterval, year, month, week, day, hour, minute, second, format));
  };

  return scale;
}

function time() {
  return init.initRange.apply(calendar(ticks.timeTicks, ticks.timeTickInterval, year.timeYear, month.timeMonth, week.timeSunday, day.timeDay, hour.timeHour, minute.timeMinute, second.second, defaultLocale.timeFormat).domain([new Date(2000, 0, 1), new Date(2000, 0, 2)]), arguments);
}

exports.calendar = calendar;
exports.default = time;
