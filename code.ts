import * as $ from "jquery";
import {MovieData1} from "./data";
import {MovieData2} from "./data";
import { IReview } from "./interfaces";

const Star1 = "<span id=\"star1\" >&#9733;</span>";
const Star2 = "<span id=\"star2\" >&#9733;</span>";
const Star3 = "<span id=\"star3\" >&#9733;</span>";
const Star4 = "<span id=\"star4\" >&#9733;</span>";
const Star5 = "<span id=\"star5\" >&#9733;</span>";

const Stars =
    "<div id=\"stars\">"
    + Star1
    + Star2
    + Star3
    + Star4
    + Star5
    + "</div>"
;

function renderdata(data: IReview) {
    let ActorListString = "";
    for (const Actor of data.Actors) {
        ActorListString += "<li>" + Actor + "</li>";
    }
    const MyNode =
        "<div id=" + data.MovieTitle + "/>"
        + "<div id=\"ThePic\">"
        + "<img src=\"" + data.ImageURL + "\" />"
        + "<p>" + data.ImageSubHeading + "</p>"
        + "</div>"
        + "<div id=\"TheKid\">"
        + "<h1>" + data.MovieTitle + "</h1>"
        + Stars
        + "<h2>" + data.Review + "</h2>"
        + "<h3>" + data.ActorsSuperHeading + "</h3>"
        + "<ul>" + ActorListString + "</ul>"
        + "</div>"
        + "</div>";
    const MainDiv = document.querySelector("body div");
    MainDiv.insertAdjacentHTML("beforeend", MyNode);
}

renderdata(MovieData1);
renderdata(MovieData2);

function changeStarRating(Grade) {
    $("#stars span").removeClass("filledStar");
    for (let i = 0; i < 5; i++) {
        if (i <= Grade) {
            $("#stars span").eq(i).addClass("filledStar");
        }
    }
}

$("#stars").on("click", "span", (e) => {
    changeStarRating($(e.target).index());
});
