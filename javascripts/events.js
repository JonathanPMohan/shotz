const searchBar = () => {
    $("#search").keyup(() => {
        $(".card-content").each(function() {
            let value = $("#search").value().toLowerCase();
              if($(this).text().toLowerCase().includes(value) == true) {
              $(this.closest('.location')).show();
              } else {
                $(this.closest('.location')).hide();
              }
          });
      });
    }
    
    const buttonElem = () => {
    $(".shoottime").on('click', (e) => {
        const element= $(event.target).text().toLowerCase();
        $(".shoottime").each(function() {
              if($(this).text().toLowerCase().includes(element) == true) {
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
        $(".location").show();
        $(".location").not(".Morning").hide()
    });
    
    $("#afternoon").on('click', (e) => {
        $(".location").show();
        $(".location").not(".Afternoon").hide()
    });
    
    $("#evening").on('click', (e) => {
        $(".location").show();
        $(".location").not(".Evening").hide()
    });
    
    $("#after-dark").on('click', (e) => {
        $(".location").show();
        $(".location").not(".Night").hide()
    });
    
    export{searchBar, buttonElem};