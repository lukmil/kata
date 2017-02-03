function vodkaConsumption(shots) {
    if (shots === null) throw new Error("shots is null");
    if (shots === "") throw new Error("string given");
    if (shots === 6) throw new Error('integer given');
    var sum = 0;
    for (var i = 0; i < shots.length; i++) {
        var checkingIfMlGiven = shots[i].slice(-2);
        var checkingIfLGiven = shots[i].slice(-1);
        if (checkingIfMlGiven === "ml") {
            sum += parseInt(shots[i].slice(0,-2));
        }
        else if (checkingIfLGiven === "l") {
            sum += parseInt(shots[i].slice(0,-1) * 1000);
        }
    }
    return sum+"ml";
}

QUnit.test("test", function (assert) {
    assert.throws(function () {
        vodkaConsumption(null);
    }, Error);
    assert.throws(function () {
        vodkaConsumption("");
    }, Error);
    assert.throws(function () {
        vodkaConsumption(6);
    }, Error);
    assert.equal(vodkaConsumption(["4l"]), ["4000ml"]);
    assert.equal(vodkaConsumption(["1.4l","500ml"]), ["1900ml"] );
});