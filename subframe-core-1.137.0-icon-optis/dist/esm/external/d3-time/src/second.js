import { timeInterval } from './interval.js';
import { durationSecond } from './duration.js';

const second = timeInterval((date) => {
  date.setTime(date - date.getMilliseconds());
}, (date, step) => {
  date.setTime(+date + step * durationSecond);
}, (start, end) => {
  return (end - start) / durationSecond;
}, (date) => {
  return date.getUTCSeconds();
});

second.range;

export { second };
