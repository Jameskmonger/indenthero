(function(mod) {

    var _splitKeep = require('splitkeep');

    mod.exports = function (input) {
        var lines = _splitKeep(input, "\n");
        var output = '';

        for (var i = 0; i < lines.length; i++) {
            output += '    ' + lines[i];
        }

        return output;
    };

})(module);
