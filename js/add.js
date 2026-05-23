addBtn.addEventListener('click', () => {
	const title = input.value.trim()
	if (!title) return
	products.push({
		id: Date.now(),
		title,
		price: 0,
		description: '',
	})
	input.value = ''
	renderProducts()
})
