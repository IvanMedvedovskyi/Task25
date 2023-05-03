function showCategories() {
    const container = document.querySelector('.categories');

    for(let i = 0; i < data.length; i++) {
      const element = document.createElement('div');
      element.innerHTML = data[i].name;
      element.setAttribute('data-category', i);
      element.addEventListener('click', showProductHandler);
      container.appendChild(element);
    }
}

function showProductHandler(event) {
    const container = document.querySelector('.products');
    container.innerHTML = '';
    const element = event.target;
    const categoryIndex = element.getAttribute('data-category');
    const categoryProducts = data[categoryIndex].products;

    for(let i = 0; i < categoryProducts.length; i++) {
        const element = document.createElement('div');
        element.innerHTML = "Model: " + categoryProducts[i].name;
        element.setAttribute('data-category', categoryIndex);
        element.setAttribute('data-product', i);
        element.addEventListener('click', showProductDetailsHandler);
        container.appendChild(element);
    }
}


function showProductDetailsHandler(event){
    const container = document.querySelector('.details');
    container.innerHTML = '';
    const element = event.target;
    const categoryIndex = element.getAttribute('data-category');
    const productIndex = element.getAttribute('data-product');
    const categoryProducts = data[categoryIndex].products;

    const description = document.createElement('div');
    const priceInfo = document.createElement('div');
    description.innerHTML = "Description: " + categoryProducts[productIndex].description;
    priceInfo.innerHTML = "Price: " + categoryProducts[productIndex].price + "$";
    container.appendChild(description);
    container.appendChild(priceInfo);

    const btn = document.createElement('button');
    btn.textContent = 'Сплатити!';
    btn.classList.add("btn_style");
    container.appendChild(btn);

    btn.onclick = showAlert;

}

function showAlert() {
    const categories = document.querySelector(".categories");
    const products = document.querySelector(".products");
    const details = document.querySelector(".details");

    categories.innerHTML = '';
    products.innerHTML = '';
    details.innerHTML = '';

    alert("Дякую за покупку! Очікуйте, ваш товар скоро прибудить до міста видачі")

    showCategories()

}


showCategories()
