import {filmBuilder} from "../components/movieComponent.js";

const filmInfo = () => {
$.get('../db/movie.json')
    .done((data) => {
        filmBuilder(data.movie);
    })
    .fail((error) => {
        console.log(error);
    });
}

export { filmInfo };