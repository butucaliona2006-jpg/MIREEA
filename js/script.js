let cart = JSON.parse(localStorage.getItem('cart')) || [];
updateCart();

function addToCart(name, price) {
  cart.push({name, price});
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCart();
  alert(`${name} added to cart!`);
}

function updateCart() {
  const count = document.getElementById('cart-count');
  if(count) count.textContent = cart.length;
}

document.getElementById('newsletter-form')?.addEventListener('submit', function(e){
  e.preventDefault();
  alert('Thank you for subscribing to MIREA!');
});
