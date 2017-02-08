function bingo(ticket, win) {
    if (ticket === null || win === null) throw new Error("values are null");
    if (ticket.length === 0) throw new Error("You have no tickets");
    if (win === 0) throw new Error("You have no chance to win ");
    var smallWin = 0;
    for (let i = 0; i < ticket.length; i++) {
        var splitted = ticket[i][0].split("");
            for (let a =0; a<splitted.length -1; a++){
                for (let b = a+1 ; b<splitted.length; b++){
                    if (splitted[a] === splitted[b]) {
                        splitted[a] = "";
                    }
                }
            }
        for (let j = 0; j < splitted.length; j++) {
            if (splitted[j].charCodeAt() === ticket[i][1]) {
                smallWin++;
            }
        }
    }
    if (smallWin >= win)
        return "Winner!";
    else return "Loser!";
}

QUnit.test("test", function (assert) {
    assert.throws(function () {
        bingo(null, null);
    }, Error);
    assert.throws(function () {
        bingo([], 5);
    }, Error);
    assert.throws(function () {
        bingo(["ABC", 32], 0);
    }, Error);
    assert.equal(bingo([['RF', 83], ['HXZYHMR', 72], ['FGRGTGGZ', 70], ['ZOFAV', 79]], 4), 'Loser!');
    assert.equal(bingo([['TOCH', 68], ['WNTFM', 77], ['RJVHANE', 75],['NJRG',71],['OLCK',80]], 2), 'Winner!');
    assert.equal(bingo([['GMZQWKC',71],['IY',69],['WTHBWVUG',85],['KKMIQMGN',74]],2), 'Winner!');
});