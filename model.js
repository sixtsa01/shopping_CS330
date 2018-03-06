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

}



class ShoppingList extends Subject{

    constructor() {

        this.shopList = [];

    }



    addItem(item) {

        this.shopList.push(item);

        publish("add item", this.shopList);

    }

}
