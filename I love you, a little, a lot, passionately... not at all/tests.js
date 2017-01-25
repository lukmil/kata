function howMuchILoveYou(nbPetals) {
    let nbPetalsNumber = nbPetals % 6;
    switch (nbPetalsNumber) {
        case 0:
            return "not at all"
        case 1:
            return "I love you";
        case 2:
            return "a little";
        case 3:
            return "a lot";
        case 4:
            return "passionately";
        case 5:
            return "madly";

    }
}

QUnit.test("How Much I love you", function (assert) {
    assert.equal(howMuchILoveYou(7), "I love you");
    assert.equal(howMuchILoveYou(3), "a lot");
    assert.equal(howMuchILoveYou(6), "not at all");
});

