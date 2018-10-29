import { searchBar, buttonElem, backButtonEvent, bindEvents } from "./events.js";
import { filmInfo } from "./data/movieData.js";
import { initialLocationView } from "./components/locationComponent.js"
import { locationInfo } from "./data/locationsData.js";
// import { movieClick  } from "./components/movieClick.js";

const initializeApp = () => {
    filmInfo();
    locationInfo();
    searchBar();
    buttonElem();
    backButtonEvent();
    bindEvents();
    initialLocationView();
    // movieClick();
    
    
}
initializeApp();
