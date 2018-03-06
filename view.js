function redrawTable(shoppingList, msg) {
	let tab = document.querySelector("#itemList");

    tab.innerHTML = "";

    for (item of shoppingList.shopList) {

        let row = tab.appendChild(document.createElement("tr"));

        if (item.priority == "High") {

            row.setAttribute('color', 'red')

        } else if (item.priority == "Medium") {

            row.setAttribute('color', 'yellow')

        } else {

            row.setAttribute('color', 'green')

        }

        let check = row.appendChild(document.createElement("td"));

        let box = check.appendChild(document.createElement("input"));

        box.setAttribute("type", "checkbox");

        let namedata = row.appendChild(document.createElement("td"));

        namedata.innerHTML = item.name;

        let qtydata = row.appendChild(document.createElement("td"));

        qtydata.innerHTML = item.quantity;

        let storedata = row.appendChild(document.createElement("td"));

        storedata.innerHTML = item.store;

        let sectiondata = row.appendChild(document.createElement("td"));

        sectiondata.innerHTML = item.section;

        let pricedata = row.appendChild(document.createElement("td"));

        pricedata.innerHTML = item.price;

    }
}
