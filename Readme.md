## timesago

`timeago` is a simple & lightweight js library that make it easy to convert timestamps into human-readable time ago statements (eg. '2 hours ago' or 'in 3 days.')

## Installation

### CDN
Include timesago directly in your HTML file using a CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/timesago@1"></script>
```

### Package manager

```bash
npm install timesago
```
Once the package is installed, you can import the library using import:

```bash
import timesago from 'timesago'
```
If you use require for importing: 

```bash
const timesago = require('timesago');
```

## Usage
You can pass any ISO 8601 formatted dates to the timesago function. 

```javascript
const result1 = timesago('October 19, 2002');
console.log(result1); // 21 years ago

const result2 = timesago(1386786600000);
console.log(result2); // 9 years ago

const result3 = timesago(Date.now() - 3 * 24 * 60 * 60 * 1000);
console.log(result3); // 3 days ago

const result4 = timesago('2050-01-15T12:30:00Z');
console.log(result4); // in 26 years
```

## API

`timesago(timestamp, options)`

- `timestamp`: _(number, string, or Date object)_: The timestamp to convert to a time ago format. Accepted formats include:

    - A number representing milliseconds since the Unix epoch.
    - A string in ISO 8601 format (e.g., '2023-01-15T12:30:00Z').
    - A JavaScript Date object.

- `options`: _(object, optional)_: An optional object with configuration options. Default options are:
```javascript
{
    now: Date.now(), // current timestamp
    prefixFromNow: 'in', 
    suffixAgo: 'ago',
    justNow: 'just now',
    blank: '',
}
```

## Contributing
Feel free to contribute. If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License
This project is licensed under the `MIT License` - see the [LICENSE.md](./LICENSE) file for details.