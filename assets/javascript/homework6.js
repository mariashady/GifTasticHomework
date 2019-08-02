
let userChoice = $(".userInput").val();

function makeButton() {
    $(".newButtons").append(`<button class="addedButtons">${$(".userInput").val()}</button>`);
    $(".userInput").val("");
}
$("#submitButton").on("click", function(event){
    event.preventDefault();
    makeButton();
});

