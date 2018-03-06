var ViewThing = require('./view')

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



class Item {

    constructor(name, store, section, price, quantity, priority) {

        this.name = name;

        this.store = store;

        this.section = section;

        this.price = price;

        this.quantity = quantity;

        this.priority = priority;

	this._purchased = false;

    }
    getName() {

        return String(this.name)

    }



    getStore() {

        return String(this.store)

    }



    getSection() {

        return String(this.section)

    }



    getPrice() {

        return String(this.price)

    }



    getQuantity() {

        return String(this.quantity)

    }



    getPriority() {

        return String(this.priority)

    }

    get purchased() {
	return this._purchased;
	}

    set purchased(nv) {
	this._purchased = nv;
	alert('${this.name} was purchased')
	}

}

class ShoppingList extends Subject{

    constructor() {
	super()

        this.newItems = [];
	this.oldItems = [];

    }



    addItem(it) {

        this.newItems.push(it);

        this.publish("add item", this);

    }
}
