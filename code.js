function renderMovie(Movie) {
    // Rendering Logic will go here 
    document.querySelector("body div").innerHTML = 
        "<div id=\"BigBoy\">" 
        + "<div id=\"ThePic\">"
        + "<img src=\"" + Movie.ImageURL + "\" />"
        + "<p>" + Movie.ImageSubHeading + "</p>"
        + "</div>"
        + "<div id=\"TheKid\">"
        + "<h1>" + Movie.MovieTitle + "</h1>"
        + "<div id=\"stars\">" +
            "<span class=\"Star\">&#9733</span>" +
            "<span class=\"emptyStar\">&#9733</span>" +
            "<span class=\"emptyStar\">&#9733</span>" +
            "<span class=\"emptyStar\">&#9733</span>" +
            "<span class=\"emptyStar\">&#9733</span>" 
        + "</div>"
        + "<h2>" + Movie.Review + "</h2>"
        + "<h3>" + Movie.ActorsSuperHeading + "</h3>"
        + "<ul>" + ActorString + "</ul>"
        + "</div>"
        + "</div>";

    /*
    <div id="BigBoy">
        <div id="ThePic">
            <img>
            <p></p> 
        </div>
        <div id="TheKid">
            <h1></h1> // Title
            <div><span></div>// Stars
            <h2></h2>
            <h3></h3>
            <ul>
            </ul>
        </div>
    </div>
    */
}

renderMovie(MovieData);
var StarButtonRow = document.querySelectorAll("#stars>span");
function changeStarRating(grade){
    // Update stars so they appear correctly according to given grade!

    for (let i = 0; i <= grade; i++) {
        StarButtonRow[i].classList.add("filledStar");
        StarButtonRow[i].classList.remove("emptyStar");
        
    }

    for (let j = 0; j <= StarButtonRow.length - 1; j++) {
        if (j > grade) {
            StarButtonRow[j].classList.add("emptyStar");
            StarButtonRow[j].classList.remove("filledStar");
        }
    }

    

    console.log("I'm in here!");
}

for (let i = 0; i < StarButtonRow.length; i++) {
    StarButtonRow[i].addEventListener(
        "click", function(){changeStarRating(i)});
}


