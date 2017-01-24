function countPositivesSumNegatives(input) {

    if (!input || input.length === 0) {
        return [];
    } else {
        var sum = 0;
        var count = 0;
        for (let i = 0; i < input.length; i++) {
            if (input[i] > 0) {
                count++;
            }
            else {
                sum += input[i];
            }
        }
        return [count, sum];
    }
}

function assertNumbers(assert, array, expectedPositiveNumbersCount, expectedNegativeNumbersSum) {

    var result = countPositivesSumNegatives(array);
    let positiveNumberCount = result ? result[0] : null;
    assert.equal(positiveNumberCount, expectedPositiveNumbersCount, " return positive numbers count ");

    let negativeNumberSum = result ? result[1] : null;
    assert.equal(negativeNumberSum, expectedNegativeNumbersSum, " return negative numbers sum ");
}
QUnit.test("Count Positives, Sum Negatives", function (assert) {
    assertNumbers(assert, null, null, null);
    assertNumbers(assert, [], null, null);
    assertNumbers(assert, [0], 0, 0);
    assertNumbers(assert, [1], 1, 0);
    assertNumbers(assert, [-1], 0, -1);

    var testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
    assertNumbers(assert, testData, 10, -65);

    testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
    assertNumbers(assert, testData, 8, -50);

});

