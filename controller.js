var shoppingModel = new ShoppingList()
var myView = new ShoppingView(shoppingModel)

function clickedon() {

    let nameVal = document.querySelector("#name").value;

    let storeVal = document.querySelector("#store").value;

    let sectionVal = document.querySelector("#section").value;

    let priceVal = document.querySelector("#price").value;

    let qtyVal = document.querySelector("#quantity").value;

    let priorityVal = document.querySelector("#priority").value;

    let newItem = new Item(nameVal, storeVal, sectionVal, priceVal, qtyVal, priorityVal);

    shoppingList.addItem(newItem);

}
