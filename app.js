const ratingState = document.querySelector(".rating-state")
const thankYouState = document.querySelector(".thank-you-state")
const form = document.querySelector(".form")
const selectedRating = document.querySelector(".selection") 

/*When an input is checked and submitted, rating-state div is hidden 
and thank-you-state div becomes visible */

form.addEventListener("submit", function(i) {
    i.preventDefault(); // Prevent page refresh when submit button is clicked
    const checkedInput = document.querySelector("input:checked")
    selectedRating.textContent = `You selected ${checkedInput.getAttribute("value")} out of 5` 
    ratingState.classList.add("hidden") 
    thankYouState.classList.remove("hidden") 
})

