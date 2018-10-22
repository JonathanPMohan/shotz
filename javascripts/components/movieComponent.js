const filmBuilder = (movieArray) => {
    let domString = '';
    movieArray.forEach((movie) => {   
        domString += `<div class="card bg-dark mb-4" style="max-width: 35rem;">
                        <div class="card-header">${movie.name}</div>
                        <div class="sub-header">${movie.subtitle}</div>
                        <div class="card-body">
                            <h4 class="card-title">${movie.genre}</h4>
                            <h6 class="card-title">${movie.releaseDate}</h6>
                            <p class="card-title">${movie.description}</p>
                            </div>
                    </div>`;
                });
    $('#movie').append(domString);
}

export {filmBuilder};