class ShoppingView {
	constructor(model) {
		model.subscribe(this.redrawTable.bind(this))
	}


	redrawTable(shoppingList, msg) {
		let draw = document.querySelector("#item_List");
   		draw.innerHTML = "";
    		for (let item of shoppingList.shopList) {
			let row = draw.appendChild(document.createElement("tr"))
			row.classList.add(item.priority);
			let box = document.createElement("input")
			box.type = "checkbox"
			row.appendChild(box)
			box.onclick = function() {
				if (item.purchased === false) {
					item.purchased = true;
					box.parentElement.classList.add("strikeout")
               		 }	else {
                    			item.purchased = false;
                    			box.parentElement.classList.remove("strikeout")
               			 }

       			 }

	    	let namedata = row.appendChild(document.createElement("td"));
            	namedata.innerHTML = item.name;
            	let quantitydata = row.appendChild(document.createElement("td"));
            	quantitydata.innerHTML = item.quantity;
            	let storedata = row.appendChild(document.createElement("td"));
            	storedata.innerHTML = item.store;
            	let sectiondata = row.appendChild(document.createElement("td"));
            	sectiondata.innerHTML = item.section;
            	let pricedata = row.appendChild(document.createElement("td"));
            	pricedata.innerHTML = item.price;
        	
		}
	}

}
