import {loadClickedMovie,} from '../javascripts/components/movieComponent.js';
import { initialMovieView} from '../javascripts/components/movieComponent.js';
import {initialLocationView} from '../javascripts/components/locationComponent.js';

// Search Bar Function //

const searchBar = () => {
    $("#searchBar").keyup(() => {
        $(".location").each(function () {
            let val = $("#searchBar").val().toLowerCase();
            if ($(this).text().toLowerCase().includes(val) == true) {
                $(this.closest('.location')).show();
            } else {
                $(this.closest('.location')).hide();
            }
        });
    });
}


// Button Elements Event //

const buttonElem = () => {
    $(".body").on('click', (e) => {
        $(".btn").each(function () {
            if ($(this).text().toLowerCase().includes(e) == true) {
                $(this.closest('.location')).show();
            } else {
                $(this.closest('.location')).hide();
            }
        });
    })
}

// All 5 Buttons Events | Show & Hide //

$("#all").click(() => {
    $(".location").fadeIn(800);
});

$("#morning").on('click', (e) => {
    $(".location").fadeIn(800);
    $(".dark").hide();
    $(".afternoon").hide();
    $(".evening").hide();

});

$("#afternoon").on('click', (e) => {
    $(".location").fadeIn(800);
    $(".dark").hide();
    $(".morning").hide();
    $(".evening").hide();
});

$("#evening").on('click', (e) => {
    $(".location").fadeIn(800);
    $(".dark").hide();
    $(".morning").hide();
    $(".afternoon").hide();
});

$("#dark").on('click', (e) => {
    $(".location").fadeIn(800);
    $(".afternoon").hide();
    $(".morning").hide();
    $(".evening").hide();
});

// Function to bind

const bindEvents = () => {
    $('#movie').on('click', '.movie', (e) => {
        const clickedMovie = $(e.target).closest('.movie').attr('id');
        $('.backButton').show();
        loadClickedMovie(clickedMovie);
        // loadLocationsOnClick(clickedMovie);
    })
}

const backButtonEvent = () => {
    $('#back-button').click(() => {
        $("#movie").empty();
        $(".buttons").show();
        $("#locations").empty();
        initialMovieView();
        initialLocationView();
        $('.backButton').hide();
    })
}

export { searchBar, buttonElem, bindEvents, backButtonEvent };


