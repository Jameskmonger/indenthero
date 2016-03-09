var test = require('modunit');
var indent = require('./index');

test('it indents single line by 4 spaces', function (t, input, expected) {
    var output = indent(input);

    t.assert.equal(expected, output);
}, [
    ['', '    '],
    ['a great philosopher once said', '    a great philosopher once said'],
    ['build that wall!', '    build that wall!']
]);
