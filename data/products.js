// ✅ Global cart
let cart = [];

// ✅ Load from localStorage
function loadCart() {
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    cart = JSON.parse(storedCart);
  } else {
    cart = [];
  }
}

// ✅ Save to localStorage
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// ✅ Render Products
function renderProducts(products) {
  const container = document.getElementById("productsContainer");
  if (!container) return;

  container.innerHTML = "";
  products.forEach((item, index) => {
    container.innerHTML += `
      <div class="col-12 col-sm-6 col-md-4 mb-4">
        <div class="card h-100 shadow-sm">
          <img src="${item.img}" class="card-img-top" alt="${item.name}">
          <div class="card-body text-center">
            <h6 class="card-title">${item.name}</h6>
            <p class="text-muted">${item.price}</p>
            <button class="btn btn-dark btn-sm" onclick="addToCart(${index})">Add to Cart</button>
          </div>
        </div>
      </div>`;
  });
}

// ✅ Filter Products (Navbar calls this)
function filterProducts(type) {
  showProducts(type);
}

// ✅ Add to Cart
function addToCart(index) {
  cart.push(data[index]);
  saveCart();
  updateCart();
  showToast("✅ Product successfully added to cart!");
}

// ✅ Remove from Cart
function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
  updateCart();
}

// ✅ Update Cart UI
function updateCart() {
  const cartCount = document.getElementById("cartCount");
  const cartBody = document.querySelector("#offcanvasCart .offcanvas-body");
  const cartSubtotal = document.getElementById("cartSubtotal");

  // ✅ Show cart count only if > 0
  if (cartCount) {
    if (cart.length > 0) {
      cartCount.style.display = "inline-block"; 
      cartCount.textContent = cart.length;
    } else {
      cartCount.style.display = "none"; 
    }
  }

  if (!cartBody || !cartSubtotal) return;

  if (cart.length === 0) {
    cartBody.innerHTML = "<p>Your cart is empty.</p>";
    cartSubtotal.querySelector("h6").textContent = "Total: $0";
    return;
  }

  let html = "<ul class='list-group mb-3'>";
  let total = 0;

  cart.forEach((item, i) => {
    // ✅ Convert price string → number
    let price = parseFloat(item.price.replace(/[^0-9.]/g, "")) || 0;
    total += price;

    html += `<li class="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <img src="${item.img}" alt="${item.name}" width="40" height="40" class="me-2">
        <strong>${item.name}</strong><br>
        <small class="text-muted">$${price.toFixed(2)}</small>
      </div>
      <div>
        <button class="btn btn-sm btn-danger" onclick="removeFromCart(${i})">Remove</button>
      </div>
    </li>`;
  });

  html += "</ul>";

  cartBody.innerHTML = html;
  cartSubtotal.querySelector("h6").textContent = `Total: $${total.toFixed(2)}`;
}

// ✅ Show Toast
function showToast(message) {
  const toastEl = document.getElementById("cartToast");
  if (!toastEl) return;
  toastEl.querySelector(".toast-body").textContent = message;
  const toast = new bootstrap.Toast(toastEl);
  toast.show();
}

// ✅ Dynamic Show Products (with filter + search)
function showProducts(filterType = "all", query = "") {
  const productsContainer = document.getElementById("productsContainer");
  if (!productsContainer) return;

  productsContainer.parentElement.style.display = "block";
  productsContainer.innerHTML = "";

  let filtered = data;

  // Category filter
  if (filterType !== "all") {
    filtered = filtered.filter(item => item.type.includes(filterType));
  }

  // Search filter
  if (query) {
    filtered = filtered.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
  }

  if (filtered.length > 0) {
    renderProducts(filtered);
  } else {
    productsContainer.innerHTML = "<p>No products found.</p>";
  }
}

// ✅ Initial Render
document.addEventListener("DOMContentLoaded", () => {
  loadCart();       // load cart from localStorage
  renderProducts(data);
  updateCart();
});



















const openSearch = document.getElementById('openSearch');
const closeSearch = document.getElementById('closeSearch');
const searchOverlay = document.getElementById('searchOverlay');
const searchInput = searchOverlay ? searchOverlay.querySelector("input") : null;

// Show overlay
if (openSearch) {
  openSearch.addEventListener('click', () => {
    searchOverlay.classList.add('show');
    if (searchInput) searchInput.focus();
  });
}

// Close overlay
if (closeSearch) {
  closeSearch.addEventListener('click', () => {
    searchOverlay.classList.remove('show');
    if (searchInput) searchInput.value = "";
  });
}

// 🔥 Dynamic Show Products
function showProducts(filterType = "all", query = "") {
  const contactSection = document.querySelector(".contact-section");
  const messageSection = document.querySelector(".message-section");
  const mapSection = document.querySelector(".map-section");
  const productsContainer = document.getElementById("productsContainer");

  // Hide other sections
  if (contactSection) contactSection.style.display = "none";
  if (messageSection) messageSection.style.display = "none";
  if (mapSection) mapSection.style.display = "none";

  // Show product container
  if (productsContainer) {
    productsContainer.parentElement.style.display = "block";
    productsContainer.innerHTML = "";

    let filtered = data;

    // Filter by category type
    if (filterType !== "all") {
      filtered = filtered.filter(item => item.type.includes(filterType));
    }

    // Filter by search query
    if (query) {
      filtered = filtered.filter(item => 
        item.name.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Render
    if (filtered.length > 0) {
      renderProducts(filtered);
    } else {
      productsContainer.innerHTML = "<p>No products found.</p>";
    }
  }
}

// ✅ Navbar buttons call this
function filterProducts(type) {
  showProducts(type);
}

// ✅ Search input listens for Enter key
if (searchInput) {
  searchInput.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      showProducts("all", searchInput.value.trim());
      searchOverlay.classList.remove("show"); // close overlay
    }
  });
}










// // ✅ Hide all sections except NAVBAR + PRODUCTS + FOOTER
function showOnlyProducts() {
  // hide sections but skip navbar, footer, footer-bottom
  const sections = document.querySelectorAll("section");
  sections.forEach(sec => {
    if (
      !sec.querySelector(".navbar") &&   // keep navbar
      !sec.classList.contains("footer") && 
      !sec.classList.contains("footer-bottom")
    ) {
      sec.style.display = "none";
    }
  });

  // ✅ Show products container
  const productsWrapper = document.querySelector(".container");
  if (productsWrapper) productsWrapper.style.display = "block";

  // ✅ Show footer always
  const footer = document.querySelector(".footer");
  const footerBottom = document.querySelector(".footer-bottom");
  if (footer) footer.style.display = "block";
  if (footerBottom) footerBottom.style.display = "block";
}

// ✅ Modify filterProducts
function filterProducts(type) {
  showOnlyProducts();   // hide support, faq, help
  showProducts(type);   // show products grid
}