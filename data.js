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