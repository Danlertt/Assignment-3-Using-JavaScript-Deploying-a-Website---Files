/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
const FULL_DAY_COST = 35
const HALF_DAY_COST = 20
const dayElements = document.querySelectorAll('li')
const clearBtn = document.getElementById('clear-button')
const costDisplayElt = document.getElementById('calculated-cost')
const halfBtn = document.getElementById('half')
const fullBtn = document.getElementById('full')

let daysAdded = 0
let totalCost = 0
let dailyRate = FULL_DAY_COST

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

dayElements.forEach((e) => {
  e.addEventListener('click', () => {
    if (!e.classList.contains("clicked")) {
      e.classList.add("clicked")
      daysAdded += 1
    }
    calculateCost()
  })
})



/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clearBtn.addEventListener('click', () => {
  daysAdded = 0
  totalCost = 0
  dayElements.forEach((e) => {
    e.classList.remove('clicked')
  })
  calculateCost()
})


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
halfBtn.addEventListener('click', () => {
  dailyRate = HALF_DAY_COST
  halfBtn.classList.add('clicked')
  fullBtn.classList.remove('clicked')
  calculateCost()
})



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

fullBtn.addEventListener('click', () => {
  dailyRate = FULL_DAY_COST
  fullBtn.classList.add('clicked')
  halfBtn.classList.remove('clicked')
  calculateCost()
})




/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function calculateCost() {
  costDisplayElt.textContent = daysAdded * dailyRate
}

