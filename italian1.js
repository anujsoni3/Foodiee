function addToCart(itemName, price, quantitySelectId) {
    // Get the quantity from the specified select element
    const quantitySelect = document.getElementById(quantitySelectId);
    const quantity = parseInt(quantitySelect.value);

    // Check if the quantity is a valid number and greater than zero
    if (isNaN(quantity) || quantity < 1) {
        alert('Please select a valid quantity.');
        return;
    }

    // Retrieve the cart from local storage, or create an empty array if it doesn't exist
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Find if the item already exists in the cart
    const existingItem = cart.find(item => item.name === itemName);

    if (existingItem) {
        // If the item exists, update its quantity
        existingItem.quantity += quantity;
    } else {
        // If the item doesn't exist, add it to the cart
        cart.push({
            name: itemName,
            price: price,
            quantity: quantity,
        });
    }

    // Store the updated cart back to local storage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Notify the user that the item was added to the cart
    alert(itemName + ' added to cart!');
}
