function dutyFree(normPrice, discount, hol) {
    if (normPrice === null || discount === null || hol === null) throw new Error("Any Value given null");
    if (normPrice  <= 0 || discount  <= 0 || hol <= 0) throw new Error("Any Value given with minus or 0");
    return Math.floor((hol / (normPrice / 100 * discount)));
}


QUnit.test("Holiday VIII - Duty Free", function (assert) {
    assert.throws(function () {
        dutyFree(null, null, null);
    }, Error);
    assert.throws(function () {
        dutyFree(-1, -1, -1);
    }, Error);
    assert.throws(function () {
        dutyFree(0, 0, 0);
    }, Error);

    assert.equal(dutyFree(12, 50, 1000), 166);
    assert.equal(dutyFree(17, 10, 500), 294);
    assert.equal(dutyFree(24, 35, 3000), 357);

});

