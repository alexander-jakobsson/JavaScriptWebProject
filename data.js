let MovieData = {
    ImageURL: "https://static.rogerebert.com/uploads/movie/movie_poster/dark-city-1998/large_5EzPQs7yDboIVZJa7Feaw7SioZa.jpg",
    ImageSubHeading: "-> --> |>0<| <-- <-",
    WebsiteTitle: "Film Review: Dark City",
    MovieTitle: "Film Review |> Dark City |>",
    Review: "This movie is SICK. It is better than 'The Matrix'. I enjoyed watching it. No shit.",
    ActorsSuperHeading: "Starring:",
    Actors: ["Rufus Sewell", "William Hurt", "Kiefer Sutherland", "Jennifer Connoly"],
    //ActorString: Actors.forEach(makeStringOfArray(ActorString, Actor)),
}

let ActorString = "";

for (i = 0; i < MovieData.Actors.length; i++) {
    ActorString += "<li>" + MovieData.Actors[i] + "</li>";
}

let filledStarClass = "class=\"filledStar\"";
let emptyStarClass = "class=\"emptyStar\"";
let endStarTag = ">&#9733;</span>";

let star1 = "<span id=\"star1\" ";
let star2 = "<span id=\"star2\" ";
let star3 = "<span id=\"star3\" ";
let star4 = "<span id=\"star4\" ";
let star5 = "<span id=\"star5\" ";

let RowOfStars = 
    "<div id=\"stars\">" +
    star1 + emptyStarClass + endStarTag +
    star2 + emptyStarClass + endStarTag +
    star3 + emptyStarClass + endStarTag +
    star4 + emptyStarClass + endStarTag +
    star5 + emptyStarClass + endStarTag +
    "</div>"
;

var StarButtonRow = document.querySelectorAll("#stars>span");
    