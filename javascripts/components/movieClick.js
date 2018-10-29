const movieClick = (clickedMovie) => {
    let domString = '';
    clickedMovie.forEach(movie => {
        domString += `<div class="card bg-dark p-1 m-3 mb-4 movie" style="max-width: 35rem;">
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
    $('#movieClick').html(domString);
}

export { movieClick };