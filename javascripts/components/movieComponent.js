import { filmInfo} from "../data/movieData.js";

// Function to write the movies to the dom //

const filmBuilder = (movieArray) => {
    let domString = '';
    movieArray.forEach((movie) => {
        domString += `<div class="card bg-dark p-1 m-3 mb-4 movie" style="max-width: 21rem;">
                        <div class="card-header">${movie.name}</div>
                        <div class="sub-header">${movie.subtitle}</div>
                        <div class="card-body">
                            <h4 class="card-title">${movie.genre}</h4>
                            <h6 class="card-title">${movie.releaseDate}</h6>
                            <p class="card-loc"># of Shooting Locations: ${movie.locations.length}</p>
                            <hr>
                            <p class="card-title">${movie.description}</p>
                            </div>
                    </div>`;
    });
    $('#movie').append(domString);
}

// Function to display the clicked movie //

const loadClickedMovie = (movieID) => {
    $(".buttons").hide();
    filmInfo().then((movies) => {
        $("#movie").empty();
        const newClickedMovie = movies.filter(movie => movie.id === movieID);
        filmBuilder(newClickedMovie);      
        }).catch((error) => {
            console.error(error);
        });
}

// Function to display all movies on load //

const initialMovieView = () => {
    filmInfo().then((movies) => {
        filmBuilder(movies);
    }).catch((error) => {
        console.error(error);
    });
}

// Function to load locations for clicked movie //

// const loadLocationsOnClick = (movieID) => {
//     locationsArrayForMovies(movieID)
//         .then((movieLocations) => {
//            return loadLocations(movieLocations)
//             .then((locationSubset) => {
//                 $("#locations").empty();
//                 return locationsBuilder(locationSubset);
//         }).catch((error) => {
//             console.error(error);
//         });
//     })
// }

export { filmBuilder, loadClickedMovie, initialMovieView  };
