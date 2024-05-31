function toggleCatalog() {
  const catalogSection = document.getElementById("catalog-section");
  if (catalogSection.classList.contains("open")) {
      catalogSection.classList.remove("open");
      setTimeout(() => {
          catalogSection.style.display = "none";
          document.querySelectorAll('.combobox-container select').forEach(select => {
              select.classList.remove('show');
          });
      }, 500);
  } else {
      catalogSection.style.display = "block";
      setTimeout(() => {
          catalogSection.classList.add("open");
          document.querySelectorAll('.combobox-container select').forEach(select => {
              select.classList.add('show');
          });
      }, 10);
  }
}

  
  function loadProduct(productName) {
    window.location.href = `Order.html?product=${encodeURIComponent(productName)}`;
  }
  
  function goTo(file) {
    window.location.href = `${file}.html`;
  }

  function scrollToFooter() {
    const footer = document.getElementById("footer");
    footer.scrollIntoView({ behavior: 'smooth' });
}

function searchProducts() {
  const searchTerm = document.getElementById("search-input").value.toLowerCase();
  const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm)
  );
  const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = '';

    filteredProducts.forEach(product => {
        productsContainer.appendChild(product.createProductCard());
    });
}

function findProducts() {
  const model = document.getElementById('model').value;
  const color = document.getElementById('color').value;
  const size = document.getElementById('size').value;
  const minPrice = document.getElementById('min-price').value;
  const maxPrice = document.getElementById('max-price').value;

  const filteredProducts = products.filter(product => {
    let matchesModel = true;
    if (model) {
        matchesModel = product.name.includes(model);
    }

    let matchesColor = true;
    if (color) {
        matchesColor = product.colors.includes(color);
    }

    let matchesSize = true;
    if (size) {
        matchesSize = product.sizes.includes(size);
    }

    let matchesMinPrice = true;
    if (minPrice) {
        matchesMinPrice = product.price >= parseInt(minPrice);
    }

    let matchesMaxPrice = true;
    if (maxPrice) {
        matchesMaxPrice = product.price <= parseInt(maxPrice);
    }

    return matchesModel && matchesColor && matchesSize && matchesMinPrice && matchesMaxPrice;
});

  const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = '';

    filteredProducts.forEach(product => {
        productsContainer.appendChild(product.createProductCard());
    });
  
}
function clearSearch() {
  document.getElementById("search-input").value = '';
  displayProducts(products);
}

function displayProducts(productList) {
  const productsContainer = document.getElementById('products');
  productsContainer.innerHTML = '';

  productList.forEach(product => {
      const productCard = product.createProductCard();
      productsContainer.appendChild(productCard);
  });
}

function toggleSearch() {
  var searchWrapper = document.getElementById("search-wrapper");
  searchWrapper.classList.toggle('expanded');
}

document.getElementById('about-link').addEventListener('click', scrollToFooter);
document.getElementById('clear-icon').addEventListener('click', clearSearch);

function toggleMenuLink(page) {
  switch (page) {
      case 'index':
          goTo('index');
          closeSideMenu();
          break;
      case 'catalog':
          toggleCatalog();
          closeSideMenu();
          break;
      case 'about':
        scrollToFooter();
        closeSideMenu();
          break;
      default:
          break;
  }
}

function toggleDropdown(dropdownId) {
  var dropdown = document.getElementById(dropdownId);
  dropdown.classList.toggle('open');
}

function closeSideMenu() {
  var sideMenu = document.getElementById('side-menu');
  sideMenu.classList.remove('open')
}