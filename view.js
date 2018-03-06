var ViewThing = new Subject()
ViewThing.subscribe()

function redrawTable(shoppingList) {

    	let tab = document.querySelector("#itemtab");

    	for (item of shoppingList.shopList) {

        let row = tab.appendChild(document.createElement("tr"));

        let check = row.appendChild(document.createElement("td"));

        let box = check.appendChild(document.createElement("input"));

        box.setAttribute("type", "checkbox");

        let namedata = row.appendChild(document.createElement("td"));

        namedata.innerHTML = item.getName();

        let qtydata = row.appendChild(document.createElement("td"));

        qtydata.innerHTML = item.getQuantity();

        let storedata = row.appendChild(document.createElement("td"));

        storedata.innerHTML = item.getStore();

        let sectiondata = row.appendChild(document.createElement("td"));

        sectiondata.innerHTML = item.getSection();

        let pricedata = row.appendChild(document.createElement("td"));

        pricedata.innerHTML = item.getPrice();

    }

}
