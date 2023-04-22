document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar')
	const allNavltems = document.querySelectorAll(".nav-link")
	const navList = document.querySelector(".navbar-collapse")

	function addShadow() {
		if (window.scrollY >= 300) {
			nav.classList.add('shadow-bg')
		} else {
			nav.classList.remove('shadow-bg')
		}
	}
	allNavltems.forEach(item => item.addEventListener("click", () => navList.classList.remove("show")))

	window.addEventListener('scroll', addShadow)

	// Funkcja do zmiany języka
	function changeLanguage(lang) {
		const languageFile = lang + '.json';

		fetch(languageFile)
			.then((response) => response.json())
			.then((data) => {
				const i18nElements = document.querySelectorAll('[data-i18n]');

				i18nElements.forEach((element) => {
					const key = element.getAttribute('data-i18n');
					const translatedText = data[key];

					if (translatedText) {
						element.innerHTML = translatedText;
					}
				});
			});
	}


	changeLanguage('en');
})
