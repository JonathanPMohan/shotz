import { locationBuilder } from "../components/locationComponent.js";

const locationInfo = () => {
    return new Promise((resolve, reject) => {
        $.get('../db/locations.json')
            .done(data => {
                resolve(data.locations);
                locationBuilder(data.locations);
            })
            .fail(error => {
               reject(error);
            })
    });

}







// const locationInfo = () => {
//     $.get('./db/locations.json')
//         .done((data) => {
//             locationBuilder(data.locations)
//         })
//         .fail((error) => {
//             console.error(error);
//         });
// }

export { locationInfo };



// const locationInfo = () => {
//     return new Promise((resolve, reject) => {
//       $.ajax('./db/locations.json')
//         .done((data) => {
//           locationBuilder(data);
//         })
//         .fail((err) => {
//           console.error(err);
//         });