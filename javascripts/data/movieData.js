import { filmBuilder } from "../components/movieComponent.js";

// const filmInfo = () => {
//     $.get('../db/movie.json')
//         .done((data) => {
//             filmBuilder(data.movie);
//         })
//         .fail((error) => {
//             console.log(error);
//         });
// }

const filmInfo = () => {
    return new Promise((resolve, reject) => {
        $.get('../db/movie.json')
            .done(data => {
                resolve(data.movie);
                filmBuilder(data.movie);
            })
            .fail(error => {
               reject(error);
            })
    });

}

export { filmInfo };
