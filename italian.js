function addToCart(name, price, quantityId) {
    var quantity = document.getElementById(quantityId).value;
    var totalPrice = price * quantity;
    var cartItem = document.createElement("li");
    cartItem.textContent = name + " x " + quantity + " - Total: Rs" + totalPrice.toFixed(2);
    document.getElementById("cart-items").appendChild(cartItem);
}
function generateBill() {
    var totalAmount = 0;
    var items = document.getElementById("cart-items").getElementsByTagName("li");
    for (var i = 0; i < items.length; i++) {
        var itemPrice = parseFloat(items[i].textContent.split("Total: Rs")[1]);
        totalAmount += itemPrice;
    }
    var tax = totalAmount * 0.1; // Assuming 10% tax
    var grandTotal = totalAmount + tax;
    document.getElementById("total").textContent = "Total Amount: Rs" + grandTotal.toFixed(2) + " (Including 10% tax)";
}