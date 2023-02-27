const ratingState = document.querySelector(".rating-state")
const thankYouState = document.querySelector(".thank-you-state")
const form = document.querySelector(".form")
const selectedRating = document.querySelector(".selection") // Récupère le <p> 

/*When an input is checked and submitted, rating-state div is hidden 
and thank-you-state div becomes visible */

form.addEventListener("submit", function(i) {
    i.preventDefault(); // Prevent page refresh when submit button is clicked
    const checkedInput = document.querySelector("input:checked")  // Récupère l'input choisie par l'utilisateur
    selectedRating.textContent = `You selected ${checkedInput.getAttribute("value")} out of 5`  // Définit le texte affiché dans le <p> en récupérant la valeur de la checkedInput 
    ratingState.classList.add("hidden")  // Cache la div rating-state en lui attribuant la classe hidden (et la propriété display:none associée)
    thankYouState.classList.remove("hidden")  // Affiche la div thank-you-state en lui retirant la classe hidden
})

