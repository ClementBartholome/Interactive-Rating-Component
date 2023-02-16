const ratingState = document.querySelector(".rating-state")
const thankYouState = document.querySelector(".thank-you-state")
const form = document.querySelector(".form")

/*When an input is checked and submitted, rating-state div is hidden 
and thank-you-state div becomes visible */

form.addEventListener("submit", function(i) {
    i.preventDefault(); // Prevent page refresh when submit button is clicked
    const selector = "input[name=rating]:checked"
    const checkedInput = document.querySelector(selector)
        
    if(checkedInput !== null) {
        const selectedRating = document.querySelector(".selection")
        selectedRating.textContent = `You selected ${checkedInput.getAttribute("value")} out of 5`
        ratingState.classList.add("hidden")
        thankYouState.classList.remove("hidden")
    }

})

/* Add orange background to an input/label when it is clicked by adding "active"
 CSS class to it
*/

const label = document.querySelectorAll(".rating")

label.forEach(i => {
    i.addEventListener("click", function () {
        label.forEach(i => i.classList.remove("active"))
        this.classList.add("active")
      })
})

