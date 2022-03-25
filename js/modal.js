const contactButton = document.querySelector('.contact_button')
const modalWindow = document.querySelector('.contact-form')
const closeWindow = document.querySelector('.close_btn')

contactButton.addEventListener("click", () => {
	modalWindow.style.display = 'block'
})

closeWindow.addEventListener('click', () => {
	modalWindow.style.display = 'none'
})

