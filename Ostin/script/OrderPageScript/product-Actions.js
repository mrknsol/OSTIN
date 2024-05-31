function changeImage(direction) {
    const urlParams = new URLSearchParams(window.location.search);
    const productName = urlParams.get('product');
    const product = products.find(p => p.name === productName);
  
    if (product) {
        const imageElement = document.getElementById('product-image');
        let currentIndex = product.image.indexOf(imageElement.src);
        currentIndex += direction;
  
        if (currentIndex >= product.image.length) currentIndex = 0;
        if (currentIndex < 0) currentIndex = product.image.length - 1;
  
        imageElement.src = product.image[currentIndex];
    }
  }
  
  function selectColor(button) {
    const colorOptions = document.getElementById('color-options').children;
    for (let i = 0; i < colorOptions.length; i++) {
      colorOptions[i].classList.remove('selected');
    }
    button.classList.add('selected');
  }
  