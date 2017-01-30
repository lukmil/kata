function consecutiveOnes(nums) {
    if (nums === null) throw new Error("Array is null");
    if (nums.length === 0)
        return 0;
    else if (nums.length === 1 && nums[0] === 1)
        return 1;

    var maxOnes = 0;
    var tempOnes = 1;
    var allZero = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            allZero += 1;
        }
        if (nums[i] === 1 && nums[i + 1] === 1) {
            tempOnes += 1;
        } else
            tempOnes = 1;
        if (tempOnes > maxOnes) {
            maxOnes = tempOnes;
        }
    }
    if (allZero === nums.length) return 0;
    return maxOnes;

}

QUnit.test("ONE ONe One one", function (assert) {
    assert.throws(function () {
        consecutiveOnes(null);
    }, Error);

    assert.equal(consecutiveOnes([]), 0);
    assert.equal(consecutiveOnes([0, 1]), 1);
    assert.equal(consecutiveOnes([1, 0]), 1);
    assert.equal(consecutiveOnes([1, 1, 1]), 3);
    assert.equal(consecutiveOnes([1, 1, 0]), 2);
    assert.equal(consecutiveOnes([0, 0, 0]), 0);
    assert.equal(consecutiveOnes([1, 0, 1]), 1);
    assert.equal(consecutiveOnes([1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0]), 3);


});
