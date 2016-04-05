# indenthero

The hero you need when indenting text.

## Usage

```javascript
var indenthero = require('indenthero');

indenthero('i am a single line'); // '    i am a single line'

indenthero('i am two\nlines of text'); //'    i am two\n    lines of text'

// You can also specify the amount to indent by
indenthero('one space', 1); // ' one space'
indenthero('five spaces', 5); // '     five spaces'
```

## Installation

    npm install indenthero --save

## License

[MIT](/LICENSE)
