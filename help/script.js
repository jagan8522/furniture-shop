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


