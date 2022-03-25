const hoverText = document.querySelector(".hover_flavors")
const hoverBlock = document.querySelector(".hover_flavors_list")

hoverText.addEventListener("mouseover", () => {
	hoverBlock.style.display = "block"
})

hoverText.addEventListener("mouseout", () => {
	hoverBlock.style.display = "none"
})