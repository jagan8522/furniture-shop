// const openSearch = document.getElementById('openSearch');
// const closeSearch = document.getElementById('closeSearch');
// const searchOverlay = document.getElementById('searchOverlay');
// const searchInput = searchOverlay ? searchOverlay.querySelector("input") : null;

// // Show overlay
// if (openSearch) {
//   openSearch.addEventListener('click', () => {
//     searchOverlay.classList.add('show');
//     if (searchInput) searchInput.focus();
//   });
// }

// // Close overlay
// if (closeSearch) {
//   closeSearch.addEventListener('click', () => {
//     searchOverlay.classList.remove('show');
//     if (searchInput) searchInput.value = "";
//   });
// }

// // 🔥 Dynamic Show Products
// function showProducts(filterType = "all", query = "") {
//   const contactSection = document.querySelector(".contact-section");
//   const messageSection = document.querySelector(".message-section");
//   const mapSection = document.querySelector(".map-section");
//   const productsContainer = document.getElementById("productsContainer");

//   // Hide other sections
//   if (contactSection) contactSection.style.display = "none";
//   if (messageSection) messageSection.style.display = "none";
//   if (mapSection) mapSection.style.display = "none";

//   // Show product container
//   if (productsContainer) {
//     productsContainer.parentElement.style.display = "block";
//     productsContainer.innerHTML = "";

//     let filtered = data;

//     // Filter by category type
//     if (filterType !== "all") {
//       filtered = filtered.filter(item => item.type.includes(filterType));
//     }

//     // Filter by search query
//     if (query) {
//       filtered = filtered.filter(item => 
//         item.name.toLowerCase().includes(query.toLowerCase())
//       );
//     }

//     // Render
//     if (filtered.length > 0) {
//       renderProducts(filtered);
//     } else {
//       productsContainer.innerHTML = "<p>No products found.</p>";
//     }
//   }
// }

// // ✅ Navbar buttons call this
// function filterProducts(type) {
//   showProducts(type);
// }

// // ✅ Search input listens for Enter key
// if (searchInput) {
//   searchInput.addEventListener("keydown", function(e) {
//     if (e.key === "Enter") {
//       e.preventDefault();
//       showProducts("all", searchInput.value.trim());
//       searchOverlay.classList.remove("show"); // close overlay
//     }
//   });
// }










