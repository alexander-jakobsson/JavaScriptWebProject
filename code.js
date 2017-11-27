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
            <h1></h1>
            <h2></h2>
            <h3></h3>
            <ul>
            </ul>
        </div>
    </div>
    */
}

renderMovie(MovieData);