class Subject {

    constructor() {

        this.handlers = []

    }

    subscribe(fn) {

        this.handlers.push(fn);

    }

    unsubscribe(fn) {
        this.handlers = this.handlers.filter(
            function(item) {
                if (item !== fn) {
                    return item;
                }
            }
        );
    }

    publish(msg, someobj) {
        var scope = someobj || window;
        for (let fn of this.handlers) {
            fn(scope, msg)
        }
    }
}


class Item extends Subject {

    constructor(name, store, section, price, quantity, priority) {
	super()

        this.name = name;

        this.store = store;

        this.section = section;

        this.price = price;

        this.quantity = quantity;

        this.priority = priority;

	this._purchased = false;

    }

    get purchased() {
	return this._purchased;
	}

    set purchased(nv) {
	this._purchased = nv;
	alert(`${this.name} was purchased`)
	}

}

class ShoppingList extends Subject{

    constructor() {
	super()
	this.shopList = [];

    }



    addItem(item) {

        this.shopList.push(item);
	localStorage.clear();
        localStorage.setItem('theList', JSON.stringify(this.shopList));
	this.publish('newitem', this)

    }

   removeItem(item) {
        let index = this.shopList.indexOf(item);
        if (index > -1) {
            let it = this.shopList.splice(index, 1)
        }
        localStorage.clear();
        localStorage.setItem('theList', JSON.stringify(this.shopList));
        this.publish('removeditem', this)
    }

   sortByName() {
        this.shopList.sort(function(obj1, obj2){
            var name1 = String(obj1.name).toLowerCase();
            var name2 = String(obj2.name).toLowerCase();
            if (name1 < name2) {return -1;}
            if (name1 > name2) {return 1;}
            return 0;
        })
        this.publish('sorted by name', this)
    }

    sortByQuantity() {
        this.shopList.sort(function(obj1, obj2){return obj1.quantity - obj2.quantity})
        this.publish('sorted by quantity', this)
    }

    sortByStore() {
        this.shopList.sort(function(obj1, obj2){
            var store1 = String(obj1.store).toLowerCase();
            var store2 = String(obj2.store).toLowerCase();
            if (store1 < store2) {return -1;}
            if (store1 > store2) {return 1;}
            return 0;
        })
        this.publish('sorted by store', this)
    }

    sortBySection() {
        this.shopList.sort(function(obj1, obj2){
            var section1 = String(obj1.section).toLowerCase();
            var section2 = String(obj2.section).toLowerCase();
            if (section1 < section2) {return -1;}
            if (section1 > section2) {return 1;}
            return 0;
        })
        this.publish('sorted by section', this)
    }
    
    sortByPrice() {
        this.shopList.sort(function(obj1, obj2){return obj1.price - obj2.price})
        this.publish('sorted by price', this)
    }
}
