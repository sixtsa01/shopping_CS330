var shoppingModel = new ShoppingList();
var myView = new ShoppingView(shoppingModel)


function clickedon() {
    let name_Val = document.querySelector("#name").value;
    let store_Val = document.querySelector("#store").value;
    let section_Val = document.querySelector("#section").value;
    let price_Val = document.querySelector("#price").value;
    let qty_Val = document.querySelector("#quantity").value;
    let priority_Val = document.querySelector("#priority").value;
    let newItem = new Item(name_Val, store_Val, section_Val, price_Val, qty_Val, priority_Val);
    shoppingList.addItem(newItem);
}

function reloadTable(itemList) {
    for (let itemDict of itemList) {
        let name_Val = itemDict["name"]
        let store_Val = itemDict["store"]
        let section_Val = itemDict["section"]
        let price_Val = itemDict["price"]
        let quantity_Val = itemDict["quantity"]
        let priority_Val = itemDict["priority"]
        let newItem = new Item(name_Val, store_Val, section_Val, price_Val, quantity_Val, priority_Val)
        shoppingList.addItem(newItem)
    }
}

function nameSort() {
    shoppingList.sortByName()
    console.log("sort by name")
}

function quantitySort() {
    shoppingList.sortByQuantity()
    console.log("sort by quantity")
}

function storeSort() {
    shoppingList.sortByStore()
    console.log("sort by store")
}

function sectionSort() {
    shoppingList.sortBySection()
    console.log("sort by section")
}

function priceSort() {
    shoppingList.sortByPrice()
    console.log("sort by price")
}
