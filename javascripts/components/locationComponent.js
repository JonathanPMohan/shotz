const locationBuilder = (locationArray) => {
    let domString = '';
    locationArray.forEach((location) => {   
        domString += `<div class="card p-2 m-3" style="width: 18rem;">
                        <img class="card-img-top" src="${location.image}" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${location.name}</h5>
                            <p class="card-text">Address: ${location.address}</p>
                            <h6>Shoot Time: ${location.shootTime}</h6>
                        </div>
                    </div>`;
                });
    $('#locations').append(domString);
}

export { locationBuilder };