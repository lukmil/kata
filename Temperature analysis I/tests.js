function lowestTemp(t) {
    if (t === null || t === undefined) throw new Error("integers string is null or not given");
    if (t === "") return null;
    t = t.split(" ").filter(function (entry) {
        return entry.trim() != '';
    });
    for (var i = 0; i < t.length; i++) {
        if (t[i] === "null") throw new Error("Value is null")
    }
    Array.min = function (t) {
        return Math.min.apply(Math, t);
    };
    return Array.min(t);
}
QUnit.test("test", function (assert) {
    assert.throws(function () {
        lowestTemp(null);
    }, Error);
    assert.equal(lowestTemp(""), null);
    assert.throws(function () {
        lowestTemp("0 null 1");
    }, Error);
    assert.equal(lowestTemp("-1 50 -4 20 22 -7 0 10 -8"), -8);
    assert.equal(lowestTemp('18 27 -42 16 17 -43 36 45 -25 -24 19 -14'), -43);
});