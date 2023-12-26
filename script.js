let cart = [];

function addToCart(productId) {
    const product = document.getElementById(`product-${productId}`);
    const productName = product.querySelector('h2').innerText;
    const productPrice = product.querySelector('.product-price').innerText;
    
    const item = {
        id: productId,
        name: productName,
        price: productPrice,
    };

    cart.push(item);
    alert(`${productName} added to the cart!`);
}

function viewCart() {
    if (cart.length === 0) {
        alert('Your cart is empty.');
    } else {
        let cartItems = '';
        cart.forEach(item => {
            cartItems += `${item.name} - ${item.price}\n`;
        });
        alert(`Your Cart:\n${cartItems}`);
    }
}
