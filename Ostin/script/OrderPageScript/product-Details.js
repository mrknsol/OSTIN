document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const productName = urlParams.get('product');
  
    if (productName) {
        const product = products.find(p => p.name === productName);
        if (product) {
            document.getElementById('product-name').textContent = product.name;
            document.getElementById('product-description').textContent = 'Description of ' + product.name;
            document.getElementById('product-image').src = product.image[0];
  
            const sizeSelect = document.getElementById('size-select');
            sizeSelect.innerHTML = '';
            product.sizes.forEach(size => {
                const option = document.createElement('option');
                option.value = size;
                option.textContent = size;
                sizeSelect.appendChild(option);
            });
  
            const colorOptions = document.getElementById('color-options');
            colorOptions.innerHTML = '';
            product.colors.forEach(color => {
                const button = document.createElement('button');
                button.className = 'color-option';
                button.style.backgroundColor = color;
                button.addEventListener('click', () => selectColor(button));
                colorOptions.appendChild(button);
            });
        } else {
            document.getElementById('main-content').innerHTML = '<p>Product not found</p>';
        }
    } else {
        document.getElementById('main-content').innerHTML = '<p>No product specified</p>';
    }
  });
  