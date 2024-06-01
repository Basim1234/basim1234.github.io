let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})

// scripts.js

// Placeholder for any future JavaScript functionality
document.addEventListener("DOMContentLoaded", function() {
    // Example: console log a message when a card is clicked
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        card.addEventListener("click", function() {
            console.log(`Clicked on ${this.querySelector('h3').innerText}`);
        });
    });
});
