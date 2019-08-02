
let userChoice = $(".userInput").val();

function makeButton() {
    $(".newButtons").append(`<button class="addedButtons">${$(".userInput").val()}</button>`);
}
$("#submitButton").on("click", function(event){
    event.preventDefault();
    makeButton();
});

