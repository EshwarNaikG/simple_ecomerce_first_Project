const cartItems = document.getElementById("cart-items");
const totalEl = document.getElementById("total");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
  let total = 0;
  cartItems.innerHTML = "";

  cart.forEach((item, index) => {
    total += item.price;
    cartItems.innerHTML += `
      <p>${item.name} - $${item.price}
      <button onclick="removeItem(${index})">❌</button></p>
    `;
  });

  totalEl.textContent = `Total: $${total}`;
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

renderCart();
