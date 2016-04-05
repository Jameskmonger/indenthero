(function(mod) {

    var _splitKeep = require('splitkeep');

    mod.exports = function (input, count) {
        var lines = _splitKeep(input, "\n");
        var output = '';

        var indentation = '    ';
        if (count) {
            indentation = ' '.repeat(count);
        }

        for (var i = 0; i < lines.length; i++) {
            output += indentation + lines[i];
        }

        return output;
    };

})(module);
