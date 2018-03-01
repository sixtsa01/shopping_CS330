"use strict;"

function clickedon() {
	let name = document.querySelector('#name').value;
	let quantity = document.querySelector('#quan').value;
	let store = document.querySelector('#store').value;
	let section = document.querySelector('#section').value;
	let priority = document.querySelector('#prior');
	let price = document.querySelector('#price').value;
	let mytable = document.querySelector('#list');
	let lst = [name, quantity, store, section, price]
	let row = document.createElement("tr");
	row.setAttribute("class", String(priority.value));
	let box = document.createElement("input");
	box.setAttribute("type", "checkbox");
	row.appendChild(box);
	for (l in lst) {
		let cell = document.createElement("td");
		cell.innerHTML = lst[l];
		row.appendChild(cell);
	}
	mytable.appendChild(row);
}

class Item {
	constructor(name, store, section, prce, quantity, priority) {
		this.name = name;
		this.store = store;
		this.section = section;
		this.price = price;
		this.quantity = quantity;
		this.priority = priority;
	}
}

class ShoppingList {
	constructor() {
		this.shopList = [];
	}
} 
