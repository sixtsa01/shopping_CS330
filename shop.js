"use strict;"

function add() {
	let name = document.querySelector('#name').value;
	let quantity = document.querySelector('#quan').value;
	let store = document.querySelector('#store').value;
	let section = document.querySelector('#section').value;
	let priority = document.querySelector('#prior').value;
	let price = document.querySelector('#price').value;
	let mytable = document.querySelector('#list');
	let lst = [name, quantity, store, section, price]
	let row = document.createElement("tr");
	row.setAttribute("class", String(priority));
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
