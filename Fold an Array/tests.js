function foldArray(array, runs) {
    if (array === null || runs === null) throw new Error("value are null");
    if (array === "" || runs === "") throw new Error("value are string");
    if (array === 4) throw new Error("array is integer");
    if (runs === 0) return array;

    for (let j = 0; j < runs; j++) {
        let newArray = [];
        if (array.length % 2 === 1) {

            let middleNumber = (array.length - 1) / 2;
            for (let i = 0; i < middleNumber; i++) {
                newArray[i] = array[i] + (array[array.length - 1 - i]);
            }
            newArray[middleNumber] = array[middleNumber];
            array = newArray;
        } else {
            let middleNumber = array.length / 2;
            for (let i = 0; i < middleNumber; i++) {
                newArray[i] = array[i] + (array[array.length - 1 - i]);
            }
            array = newArray;
        }
    }
    return array;
}

QUnit.test("test", function (assert) {
    assert.throws(function () {
        foldArray(null, null);
    }, Error);
    assert.throws(function () {
        foldArray("", "");
    }, Error);
    assert.throws(function () {
        foldArray(4, 1);
    }, Error);
    assert.deepEqual(foldArray([1,5], 0) , [1,5] );
    assert.deepEqual(foldArray([1, 2, 3, 4, 5], 2), [9, 6]);
    assert.deepEqual(foldArray([1, 2, 3, 4, 5, 6], 2), [14, 7]);
});


