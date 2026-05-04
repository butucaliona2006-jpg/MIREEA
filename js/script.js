function loadCart(){
let container=document.getElementById("cart-items");
let total=0;

cart.forEach(item=>{
container.innerHTML += `<p>${item.name} - ${item.price} MDL</p>`;
total += item.price;
});

document.getElementById("total").innerText="Total: "+total+" MDL";
}

function clearCart(){
localStorage.removeItem("cart");
alert("Comanda a fost plasată!");
location.reload();
}
