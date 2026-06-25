let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}
function openCart(){

    const sidebar=document.getElementById("cartSidebar");

    if(!sidebar){

        console.log("Sidebar not found");

        return;

    }

    sidebar.classList.add("active");

    renderCart();

}

function closeCart() {
    document.getElementById("cartSidebar").classList.remove("active");
}

function renderCart() {

    const cartItems = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");

    if (!cartItems || !cartTotal) return;

    cart = JSON.parse(localStorage.getItem("cart")) || [];

    cartItems.innerHTML = "";

    if (cart.length === 0) {

        cartItems.innerHTML = `
        <p style="text-align:center;margin-top:40px;">
            Your cart is empty 🛒
        </p>`;

        cartTotal.innerHTML = "₹0";

        return;
    }

    let total = 0;

    cart.forEach((item, index) => {

        total += item.price * item.quantity;

        cartItems.innerHTML += `

        <div class="cart-item">

            <img src="${item.image}" alt="">

            <div class="cart-details">

                <h4>${item.name}</h4>

                <div class="cart-price">
                    ₹${item.price}
                </div>

                <div class="qty-box">

                    <button class="qty-btn"
                    onclick="changeQty(${index},-1)">
                    -
                    </button>

                    <span>${item.quantity}</span>

                    <button class="qty-btn"
                    onclick="changeQty(${index},1)">
                    +
                    </button>

                </div>

                <button class="remove-btn"
                onclick="removeItem(${index})">
                Remove
                </button>

            </div>

        </div>

        `;

    });

    cartTotal.innerHTML = "₹" + total;

}

function changeQty(index, change) {

    cart[index].quantity += change;

    if (cart[index].quantity <= 0) {

        cart.splice(index, 1);

    }

    saveCart();

    renderCart();

}

function removeItem(index) {

    cart.splice(index, 1);

    saveCart();

    renderCart();

}

document.addEventListener("DOMContentLoaded", () => {

    renderCart();

});