var shoppingList = new ShoppingList();
var thing = new ShoppingView(shoppingList)

function clickedon() {

    let name_value = document.querySelector("#name").value;

    let store_value = document.querySelector("#store").value;

    let section_value = document.querySelector("#section").value;

    let price_value = document.querySelector("#price").value;

    let qty_value = document.querySelector("#quantity").value;

    let priority_value = document.querySelector("#priority").value;

    let newItem = new Item(name_value, store_value, section_value, price_value, qty_value, priority_value);

    shoppingList.addItem(newItem);

}
