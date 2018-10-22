const filmBuilder = (movieArray) => {
    let domString = '';
    movieArray.forEach((movie) => {   
        domString += `<div class="card bg-dark mb-4" style="max-width: 25rem;">
                        <div class="card-header">${movie.name}</div>
                        <div class="card-body">
                            <p class="card-text">${movie.description}</p>
                            <h4 class="card-title">${movie.genre}</h4>
                            <h6 class="card-title">${movie.releaseDate}</h6>
                        </div>
                    </div>`;
                });
    $('#movie').append(domString);
}

export {filmBuilder};