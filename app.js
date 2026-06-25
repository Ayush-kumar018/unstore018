const params = new URLSearchParams(window.location.search);
const category = params.get("category");

const container = document.getElementById("productsContainer");
const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");

/* CATEGORY DATA */

const categoryInfo = {

  "whey-concentrate": {
    title: "PROTEIN",
    subtitle: "Fast absorbing lean protein for recovery and performance."
  },

  "creatine": {
    title: "CREATINE",
    subtitle: "Increase strength, power and muscle performance."
  },

  "pre-workout": {
    title: "PRE WORKOUT",
    subtitle: "Maximum energy, focus and training intensity."
  },

  "fat-burner": {
    title: "FAT BURNER",
    subtitle: "Support your cutting and weight management goals."
  },

  "mass-gainer": {
    title: "MASS GAINER",
    subtitle: "High calorie nutrition for muscle growth."
  },

  "bcaa": {
    title: "BCAA",
    subtitle: "Recovery and endurance support."
  },

  "vitamins": {
    title: "VITAMINS",
    subtitle: "Daily health and wellness essentials."
  }

};


/* ERROR HANDLING */

if (!category) {

  title.innerText = "CATEGORY NOT FOUND";

} else if (!products[category]) {

  title.innerText = "NO PRODUCTS AVAILABLE";

} else {

  /* HERO TITLE */

  title.innerText = categoryInfo[category].title;

  subtitle.innerText = categoryInfo[category].subtitle;


  /* LOAD PRODUCTS */

  products[category].forEach(product => {

    container.innerHTML += `

      <div class="product"
onclick="window.location.href='detail.html?id=${product.id}'">

        <img src="${product.image}" alt="${product.name}">

        <div class="product-info">

          <h3>${product.name}</h3>

          <p>${product.description}</p>

          <div class="price">
            ₹${product.price}
          </div>
          <button class="btn"
onclick="event.stopPropagation();addToCart(${product.id})">
Add To Cart
</button>

        </div>

      </div>

    `;

  });
  function addToCart(id){
    alert("Button clicked");

let cart =
JSON.parse(localStorage.getItem("cart")) || [];

let selectedProduct = null;

for(let category in products){

const found = products[category].find(
product => product.id == id
);

if(found){
selectedProduct = found;
break;
}

}

if(!selectedProduct) return;

const existingItem = cart.find(
item => item.id == id
);

if(existingItem){

existingItem.quantity += 1;

}else{

cart.push({
id:selectedProduct.id,
name:selectedProduct.name,
price:selectedProduct.price,
image:selectedProduct.image,
quantity:1
});

}

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

// Update global cart used by cart.js
window.cart = JSON.parse(localStorage.getItem("cart"));

renderCart();
openCart();
}

}