let cart = JSON.parse(localStorage.getItem('cart')) || [];
updateCartCount();

function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert(name + ' a fost adăugat în coș!');
}

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}

function searchProducts() {
    let input = document.getElementById('search').value.toLowerCase();
    let products = document.querySelectorAll('.product-item');

    products.forEach(product => {
        let text = product.textContent.toLowerCase();
       product.style.display = text.includes(input) ? 'block' : 'none';
    });
}
