const links = document.querySelector('.menu-link')

links.addEventListener('click', () => {
		seamless.scrollIntoView(document.querySelector("#contact-us"), {
        	behavior: "smooth",
        	block: "center",
        	inline: "center",
    	});
})