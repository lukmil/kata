function deleteDigit(n) {
    if (n === null) throw new Error("null is given");
    if (n === "") throw new Error("string is given");
    var valuesArray = [];
    var intToString = n.toString();
    if (n > 1000000 || n < 10) {
        return n;
    }
    else {
        for (var i = 0; i < intToString.length; i++) {
            let temp = intToString.slice(0, i) + intToString.slice(i + 1);
            valuesArray[i] = parseInt(temp);
            intToString = n.toString();
        }
        return Math.max.apply(null, valuesArray);
    }
}

QUnit.test("test", function (assert) {
    assert.throws(function () {
        deleteDigit(null);
    }, Error);
    assert.throws(function () {
        deleteDigit("");
    }, Error);
    assert.equal(deleteDigit(5), 5);
    assert.equal(deleteDigit(1000001), 1000001);
    assert.equal(deleteDigit(11542), 1542)
});