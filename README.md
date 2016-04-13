# has-timezone
Check whether a string ends with timezone. Long live the micro-package.
## Installation
```
$ npm install --save has-timezone
```

## Usage
```javascript
var hasTimezone = require('has-timezone');

hasTimezone('asdf'); // false
hasTimezone('2010-01-01T00:00:00'); // false
hasTimezone('2010-01-01T00:00:00+00:00'); // true
hasTimezone('2010-01-01T00:00:00-0800'); // true
```

## License
MIT