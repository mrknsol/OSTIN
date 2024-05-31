document.addEventListener("DOMContentLoaded", () => {
    const productsContainer = document.getElementById("products");
    products.forEach((product) => {
        productsContainer.appendChild(product.createProductCard());
    });

    const findButton = document.querySelector('.price-inputs button');
    findButton.addEventListener('click', findProducts);
});

document.getElementById('search-input').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
      event.preventDefault();
      searchProducts();
  }
});