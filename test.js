var test = require('modunit');
var indent = require('./index');

test('it indents single line by 4 spaces', function (t, input, expected) {
    t.assert.equal(expected, indent(input));
}, [
    ['', '    '],
    ['a great philosopher once said', '    a great philosopher once said'],
    ['build that wall!', '    build that wall!']
]);

test('it splits a string with 2 lines and indents each by 4 spaces', function (t, input, expected) {
    t.assert.equal(expected, indent(input));
}, [
    ['\\n','    \\n    '],
    ['i am also\\na humble test case', '    i am also\\n    a humble test case'],
    ['nothing is worse than\\nunindented text!', '    nothing is worse than\\n    unindented text!']
]);
