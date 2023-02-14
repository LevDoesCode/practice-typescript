function sum(values) {
    var result = 0;
    for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
        var value = values_1[_i];
        result = result + value;
    }
    return result;
}
console.log(sum([1, 2, 3]));
sum(1);
