function solution(str){
    if (str === null) throw new Error("null is giving");
    if (str === "") throw new Error("string is empty");
    return str.split("").reverse().join("");
}

QUnit.test("test", function (assert) {
    assert.throws(function () {
        solution(null);
    }, Error);
    assert.throws(function () {
        solution("");
    }, Error);
    assert.equal(solution("abc"), "cba");
    assert.equal(solution("world"), "dlrow");
});