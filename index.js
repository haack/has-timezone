module.exports = hasTimezone;

function hasTimezone(date) {
  return /.*[-\+]\d\d:?\d\d$/.test(date);
}