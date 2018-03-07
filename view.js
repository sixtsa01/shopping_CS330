class ShoppingView {
	constructor(model) {
		model.subscribe(this.redrawTable.bind(this))
	}


	function redrawTable(shoppingList, msg) {
		let tab = document.querySelector("#itemList");

    		tab.innerHTML = "";

    		for (item of shoppingList.shopList) {

        		let row = tab.appendChild(document.createElement("tr"));			row.classList.add(item.priority)
			let box = document.createElement("input")
			box.type = "checkbox"
			row.appendChild(box)
			box.onclick = function() {
				item.purchased = true;
				box.parentElement.classList.add("strikeout")

       			 }

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

}
