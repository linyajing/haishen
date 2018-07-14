var each = function (array, callback) {
    for(var i = 0, l = array.length; i < l; i++) {
        callback.call(array[i], i, array[i]);
    }
}
each([1,2,3], function(i, n) {
    // 具体代码
});


