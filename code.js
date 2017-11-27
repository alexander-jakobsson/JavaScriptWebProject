function renderMovie(Movie) {
    document.querySelector("body div").innerHTML = 
        "<div id=\"BigBoy\">" 
        + "<div id=\"ThePic\">"
        + "<img src=\"" + Movie.ImageURL + "\" />"
        + "<p>" + Movie.ImageSubHeading + "</p>"
        + "</div>"
        + "<div id=\"TheKid\">"
        + "<h1>" + Movie.MovieTitle + "</h1>"
        + "<div id=\"stars\">" +
            "<span >&#9733</span>" +
            "<span >&#9733</span>" +
            "<span >&#9733</span>" +
            "<span >&#9733</span>" +
            "<span >&#9733</span>" 
        + "</div>"
        + "<h2>" + Movie.Review + "</h2>"
        + "<h3>" + Movie.ActorsSuperHeading + "</h3>"
        + "<ul>" + ActorString + "</ul>"
        + "</div>"
        + "</div>";
}

renderMovie(MovieData);
var StarButtonRow = document.querySelectorAll("#stars>span");

function changeStarRating(grade){
  
    for (let i = 0; i <= StarButtonRow.length - 1; i++) {
        console.log("Grade: " + grade + " Index: " + i);
        if (i <= grade) {  
            console.log("Added filledStar to index: " + i);    
            StarButtonRow[i].classList.add("filledStar");
        } else {
            console.log("Removed filledStar from index: " + i);
        StarButtonRow[i].classList.remove("filledStar");
        }
    }
    

    console.log("I'm in here!");
}

for (let i = 0; i < StarButtonRow.length; i++) {
    StarButtonRow[i].addEventListener(
        "click", function(){changeStarRating(i)});
}


