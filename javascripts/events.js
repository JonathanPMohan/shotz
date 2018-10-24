// Search Bar Function //

// const searchBar = () => {
//     $("#searchBar").keyup(function () {
//         let value = $("#searchBar").val();
//         console.log(value)
//         $('.location').each(function () {
//             if ($(this).not(`:contains(${value})`)) {
//                 $(this).closest(".location").hide();

//             } else { $(this).closest(".location").show(); }

//         });
//     })
// }

const searchBar = () => {
$("#searchBar").keyup(() => {
    $(".location").each(function () {
        let val = $("#searchBar").val().toLowerCase();
          if($(this).text().toLowerCase().includes(val) == true) {
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
    $(".location").show();
});

$("#morning").on('click', (e) => {
    $(".location").show();
    $(".dark").hide();
    $(".afternoon").hide();
    $(".evening").hide();

});

$("#afternoon").on('click', (e) => {
    $(".location").show();
    $(".dark").hide();
    $(".morning").hide();
    $(".evening").hide();
});

$("#evening").on('click', (e) => {
    $(".location").show();
    $(".dark").hide();
    $(".morning").hide();
    $(".afternoon").hide();
});

$("#dark").on('click', (e) => {
    $(".location").show();
    $(".afternoon").hide();
    $(".morning").hide();
    $(".evening").hide();
});


export { searchBar, buttonElem };


