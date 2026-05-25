const input = document.querySelector('.input')
const addBtn = document.querySelector('.add-btn')
const container = document.querySelector('.products')
const counter = document.querySelector('.counter')

let products = [
	{
		id: 1,
		title: 'iPhone 15 Pro',
		price: 1199,
		description: 'Powerful Apple smartphone with A17 Pro chip.',
		image: 'https://via.placeholder.com/300',
	},
]

// ====== CARD TEMPLATE ======
function ProductCard(product) {
	return `
    <div class="card">
      <img class="card__img" src="${product.image}" alt="${product.title}" />

      <h2 class="card__title">${product.title}</h2>
      <p class="card__desc">${product.description || ''}</p>

      <div class="card__bottom">
        <span class="card__price">${product.price}$</span>

        <button class="card__btn" data-id="${product.id}">
          Delete
        </button>
      </div>
    </div>
  `
}

// ====== RENDER ======
function renderProducts() {
	container.innerHTML = products.map(product => ProductCard(product)).join('')

	counter.textContent = `Products: ${products.length}`
}

// ====== INITIAL RENDER ======
renderProducts()

// ====== DELETE (event delegation) ======
container.addEventListener('click', event => {
	if (!event.target.classList.contains('card__btn')) return

	const id = Number(event.target.dataset.id)

	products = products.filter(product => product.id !== id)

	renderProducts()
})

// ====== ADD PRODUCT ======
addBtn.addEventListener('click', () => {
	const title = input.value.trim()
	if (!title) return

	products.push({
		id: Date.now(),
		title,
		price: 0,
		description: '',
		image: 'https://via.placeholder.com/300',
	})

	input.value = ''

	renderProducts()
})
