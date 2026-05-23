container.addEventListener('click', event => {
	if (!event.target.classList.contains('card__btn')) return
	const id = Number(event.target.dataset.id)
	products = products.filter(product => product.id !== id)
	renderProducts()
})
