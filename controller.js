var shoppingModel = new ShoppingList();
var myView = new ShoppingView(shoppingModel)
var table_list = JSON.parse(localStorage.getItem("theList"))
reloadTable(table_list)

function clickedon() {
    let name_Val = document.querySelector("#name").value;
    let store_Val = document.querySelector("#store").value;
    let section_Val = document.querySelector("#section").value;
    let price_Val = document.querySelector("#price").value;
    let quantity_Val = document.querySelector("#quantity").value;
    let priority_Val = document.querySelector("#priority").value;
    let newItem = new Item(name_Val, store_Val, section_Val, price_Val, quantity_Val, priority_Val);
    shoppingModel.addItem(newItem);
}

function reloadTable(table_list) {
    for (let itemDict of table_list) {
        let name_Val = itemDict["name"]
        let store_Val = itemDict["store"]
        let section_Val = itemDict["section"]
        let price_Val = itemDict["price"]
        let quantity_Val = itemDict["quantity"]
        let priority_Val = itemDict["priority"]
        let newItem = new Item(name_Val, store_Val, section_Val, price_Val, quantity_Val, priority_Val)
        shoppingModel.addItem(newItem)
    }
}

function namePrice() {
    shoppingList.sortByPrice()
    console.log("sort by price")
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

function nameSort() {
    shoppingList.sortByName()
    console.log("sort by name")
}
