function fortune(f0, p, c0, n, i) {
    var sumLeft = f0;
    var withDrawSum = c0;
    if (f0 === null || p === null || c0 === null || n === null || i === null) throw new Error("value is null");
    if (f0 === "" || p === "" || c0 === "" || n === "" || i === "") throw new Error("value is a string");
    if (f0 === 0 || p === 0 || i===0) return false;
    if (c0 === 0 && (n === 0 && f0 - c0 > 0)) return false;
    for (var k = 0; k < n-1; k++) {
        sumLeft = sumLeft + (sumLeft / 100 * p);
        if (k > 0) withDrawSum = withDrawSum + (withDrawSum / 100 * i );
        sumLeft =Math.trunc(sumLeft);
        withDrawSum =Math.trunc(withDrawSum);
        sumLeft = sumLeft - withDrawSum;
        console.log(sumLeft);
    }
    if (sumLeft > 0) return true;
    else return false;
}


QUnit.test("Banker's plan", function (assert) {
    assert.throws(function () {
        fortune(null, null, null, null, null);
    }, Error);
    assert.throws(function () {
       fortune("","","","","");

    }, Error);
    assert.equal(fortune(0,0, 0, 0, 0), false);
    assert.equal(fortune(10, 0.1, 0, 0, 0), false);
    assert.equal(fortune(0, 0, 1, 2, 3), false);
    assert.equal(fortune(100000, 1, 2000, 15, 1), true);
    assert.equal(fortune(100000, 1, 2000, 15, 1), true);
    assert.equal(fortune(100000, 1, 10000, 10, 1), true);
    assert.equal(fortune(100000, 1, 9185, 12, 1), false);


});

