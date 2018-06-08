function operate() {
if(arguments.length == 2) {
        return arguments[0] * arguments[1];
    } else {
        var sum = 0;
        for(var i = 0, max = arguments.length; i < max; i++) {
            sum += arguments[i];
        }
        return sum;
    }
}

