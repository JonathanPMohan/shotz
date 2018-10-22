import { searchBar, buttonElem } from "./events.js";
import { filmInfo } from "./data/movieData.js";
import { locationInfo } from "./data/locationsData.js";

const initializeApp = () => {
    filmInfo();
    locationInfo();
    searchBar();
    buttonElem();
}
    initializeApp();
