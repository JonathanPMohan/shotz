const searchBar = () => {
    $("#searchBar").keypress(function() {
            let value = $("#searchBar").val();
            $('.locations').not(`:contains(${value})`).hide();
    })
};   
    
    const buttonElem = () => {
    $(".btn").on('click', (e) => {
        $(".shoottime").each(function() {
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

    $('#morningButton').on('click', (e) => {
        console.log("Good Morning!")
        $('.Afternoon').hide();
        $('.Dark').hide();
        $('.Evening').hide();
      }); 

    // $("#morningButton").on('click', (e) => {
    //     console.log("Good Morning!")
    //     $(".location").show();
    //     // $(".location").not(".Morning").hide()
    // });

  
    
    $("#afternoonButton").on('click', (e) => {
        console.log("Let's Do Lunch!")
        $(".location").show();
    //     // $(".location").not(".afternoon").hide()
    });
    
    $("#eveningButton").on('click', (e) => {
        console.log("Getting Late")
        $(".location").show();
    //     // $(".location").not(".evening").hide()
    });
    
    $("#afterdarkButton").on('click', (e) => {
        console.log("Time To Head Home!")
        $(".location").show();
    //     // $(".location").not(".after-dark").hide()
    });

    
    export{searchBar, buttonElem};


    