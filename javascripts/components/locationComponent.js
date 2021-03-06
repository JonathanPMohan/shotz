import { locationInfo } from "../data/locationsData.js";
// Function to write the locations to the Dom //
const locationBuilder = (locationArray) => {
    let domString = '';
    locationArray.forEach((location) => {
        domString += `<div id="locationDiv" class="card-loc location p-3 m-3 ${location.shootTime}" style="width: 21.5rem;">
                        <img class="card-img-top" src="${location.image}" alt="Card image cap" width="325px" height="250px">
                        <div class="card-body">
                            <h5 class="card-title">${location.name}</h5>
                            <p class="card-text">Address: ${location.address}</p>
                            <h6 class ="loc-time">Shoot Time: ${location.shootTime}</h6>
                        </div>
                    </div>`;
    });
    $('#locations').append(domString);
}

// Function to display locations on load //
const initialLocationView = () => {
        locationInfo().then((locations) => {
        locationBuilder(locations);
    }).catch((error) => {
        console.error(error)
    });
}


export { locationBuilder, initialLocationView };