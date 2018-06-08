const util = {
    noRepeat: function(arr) {
        return arr.filter(function(ele, index) {
            return arr.indexOf(ele)==index;
        });
    },
    add: function(arr) {
        return arr.reduce(function(ele1, ele2) {
            return ele1 + ele2;
        });
    }
};

module.exports = util;