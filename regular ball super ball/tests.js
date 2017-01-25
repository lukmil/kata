var Ball = function (ballType) {
    if (ballType == null) {
        this.ballType = "regular";
    } else {
        this.ballType = ballType;
    }
};
QUnit.test("test", function (assert) {
    assert.equal(new Ball("super").ballType, "super");
    assert.equal(new Ball().ballType, "regular");
});
