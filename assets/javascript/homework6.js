let food = ["pizza", "tacos", "burgers"];

function makeButtons() {

    $("#buttonsView").empty();

    for (let i = 0; i < foods.length; i++){
        let a = $("<button>")
        a.addClass("food");
        a.attr("data-name", food[i]);
        a.text(food[i]);
        $("#buttonsView").append(a);
    }
}

// let userChoice = $(".userInput").val();

// function makeButton() {
//     $(".newButtons").append(`<button class="addedButtons">${$(".userInput").val()}</button>`);
//     $(".userInput").val("");
// }
// $("#submitButton").on("click", function(event){
//     event.preventDefault();
//     makeButton();
// });

// function displayFood() {

//     let food = $(this).attr("foodName");
//     let queryURL = "http://api.giphy.com/v1/gifs/search?api_key=eCMi4M1b7vas4I9GdRCg4WxBZreqr6Mm&q=" + food + "&limit=5&rating=g";

//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).then(function(response) {
//       $("#gifsHere").push(response);
//     });
// }



