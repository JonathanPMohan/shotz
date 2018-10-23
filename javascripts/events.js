const searchBar = () => {
    $("#searchBar").keypress(function() {
            let value = $("#searchBar").val();
            $('.locations').not(`:contains(${value})`).hide();
    });
};   




    
    const buttonElem = () => {
    $(".body").on('click', (e) => {
        $(".btn").each(function() {
              if($(this).text().toLowerCase().includes(e) == true) {
              $(this.closest('.location')).show();
              } else {
                $(this.closest('.location')).hide();
              }
          });
        })
    }
    
    $("#all").click(() => {
        $(".location").show();
        console.log("Show Me!")
    });

    $("#morning").on('click', (e) => {
        console.log("Good Morning!")
        $(".location").show();
        // $(".location").not(".Morning").hide()
    });

  
    
    $("#afternoon").on('click', (e) => {
        console.log("Let's Do Lunch!")
        $(".location").show();
        // $(".location").not(".afternoon").hide()
    });
    
    $("#evening").on('click', (e) => {
        console.log("Getting Late")
        $(".location").show();
        // $(".location").not(".evening").hide()
    });
    
    $("#dark").on('click', (e) => {
        console.log("Time To Head Home!")
        $(".location").show();
        // $(".location").not(".after-dark").hide()
    });

    
    
    export{searchBar, buttonElem};


    