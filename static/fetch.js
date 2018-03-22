fetch(`/getList?list=$(this.lstname)`)
.then(function(response) {
	console.log(response)
	return respons.json()
})
.catch(error => console.error('Error: ', error))
.then(function(myJson) {
	store_list = JSON.parse(myJson)
	for (let vals of myJson) {
		let vals = new Items(vals.name, vals.quantity, vals.priority, vals.store, vals.section, vals.price)
		model.addItem(it)
	}
})
