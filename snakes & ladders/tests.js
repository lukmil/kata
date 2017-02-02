var snakesAndLadders = function (board, dice) {
    if (board === null || dice === null) throw new Error('Board or dice is null');
    if (board.length === 0) throw new Error("Board is empty array ");
    if (dice.length === 0) return board[0];
    if (board === "" || dice === "") throw new Error("string is given ");
    if (board === 0 || dice === 0) throw new Error("board or dice is 0");
    var temp = 0;
    var endPos;
    for (var i = 0; i < dice.length; i++) {
        if (temp + dice[i] < board.length) {
            temp += dice[i];
            endPos = temp;
        }
        if (board[temp] !== 0) {
            if (temp + board[temp] < board.length) {
                temp += board[temp];
                endPos = temp;
            }
        }
        temp += board[temp];
    }
    return temp;
};
QUnit.test("test", function (assert) {
    assert.throws(function () {
        snakesAndLadders(null, null);
    }, Error);
    assert.throws(function () {
        snakesAndLadders([], []);
    }, Error);
    assert.throws(function () {
        snakesAndLadders(0, 0);
    }, Error);
    assert.throws(function () {
        snakesAndLadders("", "");
    }, Error);
    assert.equal(snakesAndLadders([0, 0, 3, 0, 0, 0, 0, -2, 0, 0, 0], [2, 1, 5, 1, 5, 4]), 10)
});