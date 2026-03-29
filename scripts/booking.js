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
clearBtn.addEventListener('click', () => {
  daysAdded = 0
  totalCost = 0
  dayElements.forEach((e) => {
    e.classList.remove('clicked')
  })
  calculateCost()
})

/********* change rate *********/
halfBtn.addEventListener('click', () => {
  dailyRate = HALF_DAY_COST
  halfBtn.classList.add('clicked')
  fullBtn.classList.remove('clicked')
  calculateCost()
})

fullBtn.addEventListener('click', () => {
  dailyRate = FULL_DAY_COST
  fullBtn.classList.add('clicked')
  halfBtn.classList.remove('clicked')
  calculateCost()
})

/********* calculate *********/
function calculateCost() {
  costDisplayElt.textContent = daysAdded * dailyRate
}

