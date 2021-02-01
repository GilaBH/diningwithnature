const buttons = document.querySelectorAll(".recipe-icons li");
const articles = document.querySelectorAll('article')

function filterRecipes() {
	buttons.forEach (button => {
		const article = button.parentNode.parentNode;
		const season = article.dataset.season;

		button.addEventListener("click", function() {
			articles.forEach(article => {
				if (article.dataset.season !== season) {
					article.classList.toggle("hide")
				}
			})
		})
	})

}

filterRecipes();