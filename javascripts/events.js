const searchBar = () => {
    $("#searchBar").keypress(function() {
            let value = $("#searchBar").val();
            $('.locations').not(`:contains(${value})`).hide();
    })
};   
    
    const buttonElem = () => {
    $(".shoottime").on('click', (e) => {
        $(".shoottime").each(function() {
              if($(this).text().toLowerCase().includes(e) == true) {
              $(this.closest('.location')).show();
              } else {
                $(this.closest('.location')).hide();
              }
          });
        })
    }
    
    $("#all").on('click', (e) => {
        $('.location').show();
    });

    $("#morning").on('click', (e) => {
        console.log("Hey!")
        $(".location").show();
        // $(".location").not(".morning").hide()
    });
    
    $("#afternoon").on('click', (e) => {
        console.log("Hey Dude!")
        $(".location").show();
        // $(".location").not(".afternoon").hide()
    });
    
    $("#evening").on('click', (e) => {
        console.log("Hey Man!")
        $(".location").show();
        // $(".location").not(".evening").hide()
    });
    
    $("#afterDark").on('click', (e) => {
        console.log("Wow!")
        $(".location").show();
        // $(".location").not(".after-dark").hide()
    });

    
    
    export{searchBar, buttonElem};

