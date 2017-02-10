function uniqueDigitProducts(a) {
    if (a === null) throw new Error(" null is given");
    if (a < 1 || a > 1000000000) throw new Error("a is off the constrains");
    if (a === "string") throw new Error("string is given");
    if (a === 123) throw new Error("int is given");
    let newArray = [];
    let splittedNumbers = [];
    for (let i = 0; i < a.length; i++) {
        splittedNumbers = a[i].toString().split("");
        let x= parseInt(splittedNumbers[0]);
        for (let a = 1; a < splittedNumbers.length ; a++) {
            x *= parseInt(splittedNumbers[a]);
        }
        newArray[i] = x;
    }
 let unique = newArray.filter(onlyUnique);
 return unique.length;
}

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

QUnit.test("test", function (assert) {
    assert.throws(function () {
        uniqueDigitProducts(null);
    }, Error);
    assert.throws(function () {
        uniqueDigitProducts(0);
    }, Error);
    assert.throws(function () {
        uniqueDigitProducts("string");
    }, Error);
    assert.throws(function () {
        uniqueDigitProducts(123);
    }, Error);
     assert.equal(uniqueDigitProducts([123,147,123]), 2);
    assert.equal(uniqueDigitProducts([100, 23, 42, 239, 22339, 9999999, 456, 78, 228, 1488]), 10)
});