(function(mod) {

    var _splitKeep = function (input, delimiter) {
        var split = input.split(delimiter);

        for (var i = 0; i < split.length - 1; i++) {
            split[i] += delimiter;
        }

        return split;
    };

    mod.exports = function (input) {
        var lines = _splitKeep(input, "\n");
        var output = '';

        for (var i = 0; i < lines.length; i++) {
            output += '    ' + lines[i];
        }

        return output;
    };

})(module);
