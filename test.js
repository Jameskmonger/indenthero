var test = require('modunit');
var indent = require('./index');

test('it indents single line by 4 spaces if no space count is specified', function (t, input, expected) {
    var safeExpected = expected.replace('\n', '\\n');
    var safeResult = indent(input).replace('\n', '\\n');

    t.assert.equal(safeExpected, safeResult);
}, [
    ['', '    '],
    ['a great philosopher once said', '    a great philosopher once said'],
    ['build that wall!', '    build that wall!']
]);

test('it splits a string with 2 lines and indents each by 4 spaces if no space count is specified', function (t, input, expected) {
    var safeExpected = expected.replace('\n', '\\n');
    var safeResult = indent(input).replace('\n', '\\n');

    t.assert.equal(safeExpected, safeResult);
}, [
    ['\n','    \n    '],
    ['i am also\na humble test case', '    i am also\n    a humble test case'],
    ['nothing is worse than\nunindented text!', '    nothing is worse than\n    unindented text!']
]);

test('it splits a string with 3 lines and indents each by 4 spaces if no space count is specified', function (t, input, expected) {
    var safeExpected = expected.replace('\n', '\\n');
    var safeResult = indent(input).replace('\n', '\\n');

    t.assert.equal(safeExpected, safeResult);
}, [
    ['\n\n','    \n    \n    '],
    ['a\nb\nc', '    a\n    b\n    c'],
    ['james\nmonger\ngithub', '    james\n    monger\n    github']
]);

test('it indents single line by the specified space count', function (t, input, expected, count) {
    var safeExpected = expected.replace('\n', '\\n');
    var safeResult = indent(input, count).replace('\n', '\\n');

    t.assert.equal(safeExpected, safeResult);
}, [
    ['', '    ', 4],
    ['a great philosopher once said', '    a great philosopher once said', 4],
    ['build that wall!', '    build that wall!', 4],
    ['', '  ', 2],
    ['a great philosopher once said', '  a great philosopher once said', 2],
    ['build that wall!', '  build that wall!', 2],
    ['', ' ', 1],
    ['a great philosopher once said', ' a great philosopher once said', 1],
    ['build that wall!', ' build that wall!', 1]
]);

test('it splits a string with 2 lines and indents each by the specified space count', function (t, input, expected, count) {
    var safeExpected = expected.replace('\n', '\\n');
    var safeResult = indent(input, count).replace('\n', '\\n');

    t.assert.equal(safeExpected, safeResult);
}, [
    ['\n','    \n    ', 4],
    ['i am also\na humble test case', '    i am also\n    a humble test case', 4],
    ['nothing is worse than\nunindented text!', '    nothing is worse than\n    unindented text!', 4],
    ['\n','  \n  ', 2],
    ['i am also\na humble test case', '  i am also\n  a humble test case', 2],
    ['nothing is worse than\nunindented text!', '  nothing is worse than\n  unindented text!', 2],
    ['\n',' \n ', 1],
    ['i am also\na humble test case', ' i am also\n a humble test case', 1],
    ['nothing is worse than\nunindented text!', ' nothing is worse than\n unindented text!', 1]
]);

test('it splits a string with 3 lines and indents each by the specified space count', function (t, input, expected, count) {
    var safeExpected = expected.replace('\n', '\\n');
    var safeResult = indent(input, count).replace('\n', '\\n');

    t.assert.equal(safeExpected, safeResult);
}, [
    ['\n\n','    \n    \n    ', 4],
    ['a\nb\nc', '    a\n    b\n    c', 4],
    ['james\nmonger\ngithub', '    james\n    monger\n    github', 4],
    ['\n\n','  \n  \n  ', 2],
    ['a\nb\nc', '  a\n  b\n  c', 2],
    ['james\nmonger\ngithub', '  james\n  monger\n  github', 2]
]);
