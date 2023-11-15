## timesago

`timeago` is a simple & lightweight js library that make it easy to convert timestamps into human-readable time ago statements (eg. '2 hours ago' or 'in 3 days.')

## Installation

### CDN
Include timesago directly in your HTML file using a CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/timesago@0.0.1/dist/timesago.min.js"></script>
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
You can pass any ISO 8601 formatted dates and times to the timesago function. 

```javascript
const date = new Date('December 12, 2021');
const result = timesago(date);

console.log(result); // 2 years ago
```

## Contributing
Feel free to contribute. If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License
This project is licensed under the `MIT License` - see the [LICENSE.md](./LICENSE) file for details.