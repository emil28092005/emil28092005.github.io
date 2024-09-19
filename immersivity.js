let cards = document.querySelectorAll('.card');

let phrase = "ABOBA";
cards.addEventListener("click", function() {foo()})
function foo(){
    document.querySelectorAll(".card__name").textContent = phrase;
}
