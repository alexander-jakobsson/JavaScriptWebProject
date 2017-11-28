let MovieData = require("./data");
let $ = require("jquery");

let ActorListString = "";
for (i = 0; i < MovieData.Actors.length; i++) {
    ActorListString += "<li>" + MovieData.Actors[i] + "</li>";
}

let Star1 = "<span id=\"star1\" >&#9733;</span>";
let Star2 = "<span id=\"star2\" >&#9733;</span>";
let Star3 = "<span id=\"star3\" >&#9733;</span>";
let Star4 = "<span id=\"star4\" >&#9733;</span>";
let Star5 = "<span id=\"star5\" >&#9733;</span>";

let Stars = 
    "<div id=\"stars\">" +
    Star1 + 
    Star2 + 
    Star3 + 
    Star4 + 
    Star5 +
    "</div>"
;



function renderMovie(Movie) {
    document.querySelector("body div").innerHTML = 
        "<div id=\"BigBoy\">" 
        + "<div id=\"ThePic\">"
        + "<img src=\"" + Movie.ImageURL + "\" />"
        + "<p>" + Movie.ImageSubHeading + "</p>"
        + "</div>"
        + "<div id=\"TheKid\">"
        + "<h1>" + Movie.MovieTitle + "</h1>"
        + Stars
        + "<h2>" + Movie.Review + "</h2>"
        + "<h3>" + Movie.ActorsSuperHeading + "</h3>"
        + "<ul>" + ActorListString + "</ul>"
        + "</div>"
        + "</div>";
}

renderMovie(MovieData);

function changeStarRating(Grade){
    $("#stars span").removeClass("filledStar");
    for(let i = 0; i < 5; i++) {
        if (i <= Grade) {
            $("#stars span").eq(i).addClass("filledStar");
        }
    }
}

$("#stars").on("click", "span", function(e) {
    changeStarRating($(e.target).index());
});