// Sample product data
const products = [
    { id: 1, name: "Smartphone", category: "electronics", price: 700, rating: 4 },
    { id: 2, name: "Laptop", category: "electronics", price: 1200, rating: 5 },
    { id: 3, name: "T-shirt", category: "clothing", price: 30, rating: 4 },
    { id: 4, name: "Sunglasses", category: "accessories", price: 100, rating: 3 },
    { id: 5, name: "Headphones", category: "electronics", price: 150, rating: 4 },
    { id: 6, name: "Jacket", category: "clothing", price: 80, rating: 5 },
    { id: 7, name: "Watch", category: "accessories", price: 250, rating: 3 },
];

// Function to display products
function displayProducts(filteredProducts) {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';
    filteredProducts.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product');
        productItem.innerHTML = `
            <h3>${product.name}</h3>
            <p>Category: ${product.category}</p>
            <p class="price">$${product.price}</p>
            <p class="rating">${'★'.repeat(product.rating)}${'☆'.repeat(5 - product.rating)}</p>
        `;
        productList.appendChild(productItem);
    });
}

// Function to filter products by category and price
function filterProducts() {
    const category = document.getElementById('category').value;
    const price = document.getElementById('price').value;
    const priceValue = document.getElementById('priceValue');
    priceValue.textContent = `$${price}`;

    let filteredProducts = products.filter(product => {
        const isCategoryMatch = category === 'all' || product.category === category;
        const isPriceMatch = product.price <= price;
        return isCategoryMatch && isPriceMatch;
    });

    displayProducts(filteredProducts);
}

// Function to sort products based on rating or price
function sortProducts() {
    const sortBy = document.getElementById('sort').value;

    let sortedProducts = [...products];

    if (sortBy === 'rating') {
        sortedProducts.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'priceLowToHigh') {
        sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'priceHighToLow') {
        sortedProducts.sort((a, b) => b.price - a.price);
    }

    displayProducts(sortedProducts);
}

// Initialize with all products displayed
filterProducts();
