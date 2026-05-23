const input = document.querySelector('.input')
const addBtn = document.querySelector('.add-btn')
let products = [
	{
		id: 1,
		title: 'iPhone 15 Pro',
		price: 1199,
		description: 'Powerful Apple smartphone with A17 Pro chip.',
		image: 'https://via.placeholder.com/300',
	},
]
function ProductCard(product) {
	return `
	<div class="card">
		<h2 class="card__title">${product.title}</h2>
		<p class="card__desc">${product.description}</p>
		<div class="card__price">${product.price}$</div>
		<button class="card__btn" data-id="${product.id}">
			Delete
		</button>
	</div>
	`
}
const container = document.querySelector('.products')
function renderProducts() {
	container.innerHTML = products.map(product => ProductCard(product)).join('')
}
renderProducts()
counter.textContent = `Products: ${products.length}`
