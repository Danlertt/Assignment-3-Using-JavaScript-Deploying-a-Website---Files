// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
submitBtn = document.getElementById("submit-button")
submitBtn.addEventListener('click', () => {
  
  const contactMainElt = document.getElementById("contact-page")
  contactMainElt.innerHTML = '<p>Thank you for your message.</p>'
  contactMainElt.classList.add("large-text")
})
// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

