function theName() {
// name is visible inside the function
var name = "Jo Bloggs";
console.log(name);
}

theName();


// To create shoppingListItem factory function we need to create  a function that returns an object literal with some function in it.

functon shoppingListItem(productName, productPrice) {
    
    var name = productName;
    var price = productPrice || 0;
    var totalBought = 0;

    function buyItem(qty) {
        totalBought += qty;
    }

function itemTotal() {
    return totalBought * price;
}
return {
    buy: buyItem,
    total: itemTotal;
}

}