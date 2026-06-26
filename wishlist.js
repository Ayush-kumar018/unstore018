
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

const container = document.getElementById("wishlistContainer");

function renderWishlist() {

    wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    container.innerHTML = "";

    if (wishlist.length === 0) {

        container.innerHTML = `
            <h2 style="text-align:center; color:white; margin-top:50px;">
                ❤️ Your Wishlist is Empty
            </h2>
        `;

        return;
    }

    wishlist.forEach((item, index) => {

        container.innerHTML += `

        <div class="card">

            <button class="remove-btn"
                onclick="removeWishlist(${index})">
                ✖
            </button>

            <img src="${item.image}" alt="${item.name}">

            <h3>${item.name}</h3>

            <p class="price">₹${item.price}</p>

            <button onclick="moveToCart(${index})">
                🛒 Move To Cart
            </button>

        </div>

        `;

    });

}



function removeWishlist(index){

    wishlist.splice(index,1);

    localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
    );

    renderWishlist();

}

function moveToCart(index){

    let cart =
    JSON.parse(localStorage.getItem("cart")) || [];

    const product = wishlist[index];

    const existing = cart.find(
        item => item.id === product.id
    );

    if(existing){

        existing.quantity++;

    }else{

        cart.push({

            id:product.id,
            name:product.name,
            price:product.price,
            image:product.image,
            quantity:1

        });

    }

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    wishlist.splice(index,1);

    localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
    );

    alert("Moved to Cart!");

    renderWishlist();

}

renderWishlist();