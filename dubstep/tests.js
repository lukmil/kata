function songDecoder(song){
    if (song === null) throw new Error("song has no words");
    if (song === []) throw new Error("song is empty");
    var songWords = song.split("WUBWUB");
    songWords= song.split("WUB");
    var songString = "";
    for (let i= 0 ; i<songWords.length; i++){
         songString = songString + songWords[i].toString() + " ";
    }
    var wordString = songString.split("").toString();
    return songString.replace(/  +/g, ' ').trim();
}

QUnit.test("test", function (assert) {
    assert.throws(function () {
        songDecoder(null);
    }, Error);
    assert.throws(function () {
        songDecoder([]);
    }, Error);
    assert.equal(songDecoder("AWUBBWUBC"),"A B C");
    assert.equal(songDecoder("WUBABCWUBWUB"), "ABC");
});