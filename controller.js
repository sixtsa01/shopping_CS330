var shoppingList = new ShoppingList();

function clickedon() {

    let nameVal = document.querySelector("#name").value;

    let storeVal = document.querySelector("#store").value;
    let sectionVal = document.querySelector("#section").value;

    let priceVal = document.querySelector("#price").value;

    let qtyVal = document.querySelector("#quan").value;

    let priorityVal = document.querySelector("#priority").value;

    let newItem = new Item(nameVal, storeVal, sectionVal, priceVal, qtyVal, priorityVal);

    shoppingList.addItem(newItem);

}
