
// est a variable
var crystals = []
var gameScore = 0
var wins = 0
var losses = 0
var startScore = 0


function newGame() {
    if ((gameScore) === (startScore)) {}

    else if ((gameScore) > (startScore)) {
   

} }

$(document).ready(function () {
    var gameZone = $("#game-zone")
    var crystalScore = Math.floor(Math.random() * 20);
    crystals.push(crystalScore);
    console.log("hello")

    for (var i = 1; i <= 4; i++) {
    var crystalButton = $("<img>")
    crystalButton.attr("src", "crystalimage" + i + ".jpg");

    crystalButton.attr("value", crystalScore);

    gameZone.append(crystalButton)

    newGame()
    }


    var startScoreEl = $("#total-score")
        startScore = Math.floor(Math.random() * 100);
        startScoreEl.text(startScore);


    $("#game-zone").on("click", "img", function () {
        console.log("hello")
        gameScore += parseInt($(this).attr("value"))
        $("#your-total-score-value").text(gameScore)

        console.log(startScore);
        console.log(gameScore);


        if ((gameScore) === (startScore)) {
            wins++;
            $(".wins").text('Wins: ' + wins);
            
        }
    
        else if ((gameScore) > (startScore)) {
            losses++;
            $(".losses").text('Losses: ' + losses);

            newGame ()
        }
    
    })
})
