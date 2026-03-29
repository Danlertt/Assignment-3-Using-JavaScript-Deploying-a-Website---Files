'use strict'
submitBtn = document.getElementById("submit-button")
submitBtn.addEventListener('click', () => {
  
  const contactMainElt = document.getElementById("contact-page")
  contactMainElt.innerHTML = '<p>Thank you for your message.</p>'
  contactMainElt.classList.add("large-text")
})  