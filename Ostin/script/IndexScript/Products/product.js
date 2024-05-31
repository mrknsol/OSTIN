class Product {
    constructor(image, name, price, colors, sizes) {
        this.image = image;
        this.name = name;
        this.price = price;
        this.colors = colors;
        this.sizes = sizes;
    }
  
    createProductCard() {
        const card = document.createElement("div");
        card.className = "product-card";
  
        const imgContainer = document.createElement("div");
        imgContainer.className = "img-container";
  
        const img = document.createElement("img");
        img.src = this.image[0] || "path/to/placeholder.jpg";
        img.alt = this.name;
        img.className = "product-image";
  
        imgContainer.appendChild(img);
  
        const title = document.createElement("h3");
        title.textContent = this.name;
  
        const price = document.createElement("p");
        price.textContent = `$${this.price}`;
  
        card.appendChild(imgContainer);
        card.appendChild(title);
        card.appendChild(price);
  
        card.dataset.name = this.name;
        card.onclick = () => loadProduct(this.name);
  
        return card;
    }
  }

  