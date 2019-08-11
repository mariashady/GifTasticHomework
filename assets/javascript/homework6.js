$(document).ready(function(){
    let food = ["pizza", "tacos", "burgers"];

    function makeButtons() {
    
       $("#buttonsView").empty();
    
       for (let i = 0; i < food.length; i++){
           let a = $("<button>")
           .addClass("food topic")
           .attr("data-name", food[i])
           .text(food[i]);
           $("#buttonsView").append(a);
       }
    }
    
    
    function displayGifs(){
       let apiKey = "eCMi4M1b7vas4I9GdRCg4WxBZreqr6Mm"
       let food = $(this).attr("data-name")
       let queryURL = "https://api.giphy.com/v1/gifs/search?";
       let queryParam = {
           "api_key": apiKey,
           "q": food,
           "limit": 10
       };
       let completeURL = queryURL + $.param(queryParam)
           $.ajax({
               url: completeURL,
               method:"GET"
           }).then(function (response) {
               $("#gifsHere").empty();
               console.log(response.data);
               let results = response.data;
               for (let i = 0; i < results.length; i++ ) {
                   let gifDiv = $("<div class=gifs>"); 
                   let showGif = $("<img>");
                       showGif.attr("src", results[i].images.fixed_height_still.url);
                       $("#gifsHere").append(showGif);
                   

    
               }
           });
    };
    
    makeButtons();
    
    
    function makeButton() {
        $(".newButtons").append(`<button class="addedButtons">${$(".userInput").val()}</button>`);
        $(".userInput").val("");
    }
    $("#submitButton").on("click", function(){
        event.preventDefault();
        
        let userChoice = $(".userInput").val();
        food.push(userChoice);
       makeButtons();
    });
    $(document).on("click", ".topic", displayGifs);
    
    


    





});
