// Get cart from localStorage
const cart = JSON.parse(localStorage.getItem("cart")) || [];

const orderItems = document.getElementById("orderItems");
const subtotal = document.getElementById("subtotal");
const total = document.getElementById("total");
const payBtn = document.getElementById("payBtn");

// If cart is empty
if (cart.length === 0) {

    orderItems.innerHTML = `
        <p style="text-align:center;color:#888;">
            Your cart is empty 🛒
        </p>
    `;

    payBtn.disabled = true;
    payBtn.innerText = "Cart Empty";

} else {

    let grandTotal = 0;

    cart.forEach(item => {

        grandTotal += item.price * item.quantity;

        orderItems.innerHTML += `

        <div class="cart-product">

            <img src="${item.image}" alt="${item.name}">

            <div class="cart-info">

                <h4>${item.name}</h4>

                <p>
                    ₹${item.price} × ${item.quantity}
                </p>

            </div>

        </div>

        `;

    });

    subtotal.innerText = "₹" + grandTotal;
    total.innerText = "₹" + grandTotal;

}

// Payment button
payBtn.addEventListener("click", () => {

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const address = document.getElementById("address").value.trim();
    const city = document.getElementById("city").value.trim();
    const pincode = document.getElementById("pincode").value.trim();

    if (
        name === "" ||
        phone === "" ||
        email === "" ||
        address === "" ||
        city === "" ||
        pincode === ""
    ) {
        alert("Please fill all delivery details.");
        return;
    }

    const order = {
        customer: {
            name,
            phone,
            email,
            address,
            city,
            pincode
        },
        items: cart,
        total: total.innerText,
        date: new Date().toLocaleString()
    };

    localStorage.setItem("currentOrder", JSON.stringify(order));

    alert("Delivery details saved successfully!");

    // Next step
    // window.location.href = "payment.html";
});