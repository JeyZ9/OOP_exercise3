```
import { OrderStatus } from "./OrderStatus";
import { UserSate } from "./UserSate";

const { Product } = require("./Product")
const { WebUser } = require("./WebUser");
const { Customer } = require("./Customer");
const { Account } = require("./Account");
const { Payment } = require("./Payment")
const { Order } = require("./Order");
const { LineItem } = require("./LineItem");
const { ShoppingCart } = require("./ShoppingCart");



// console.log(product1.toString());


const dateFormat = ():string => {
    let date = new Date();
    return date.toLocaleDateString();
}

// ///////////////////////////////////////////////////// //

const product1 = new Product("001", "Lay1", "Wisarut");
const product2 = new Product("002", "Lay2", "Wisarut");
const product3 = new Product("003", "Lay3", "Wisarut");
const product4 = new Product("004", "Lay4", "Wisarut");
const product5 = new Product("004", "Lay4", "Wisarut");

const listItem1 = [ 
    new LineItem(10, 12, product1),
    new LineItem(10, 12, product2),
    new LineItem(10, 12, product3),
    new LineItem(10, 12, product4)
]
const listItem2 = [ 
    new LineItem(10, 12, product1),
    new LineItem(10, 12, product4)
]


// const listItem1 = new LineItem(10, 12, product1)
// const listItem2 = new LineItem(10, 12, product2)
// const listItem3 = new LineItem(10, 12, product3)
// const listItem4 = new LineItem(10, 12, product4)


const webUser1 = new WebUser("jeyer", "123456", UserSate.NEW);
const webUser2 = new WebUser("wisarut", "123456", UserSate.ACTIVE);

const customer1 = new Customer("01", webUser1, "Nakhon Pathom", "0656683656", "jey@gmail.com")
const customer2 = new Customer("02", webUser2, "Ratchaburi", "0987819512", "rut@gmail.com")

const payment1 = new Payment("py001", 1000, "credit");
const payment2 = new Payment("py001", 1000, "credit");

const account1 = new Account("ac01", customer1, payment1, "Nakhon Pathom", false, "07:00", "16:00")
const account2 = new Account("ac02", customer2, payment2, "Ratchaburi", false, "07:00", "16:00")

const cart1 = new ShoppingCart(dateFormat(), account1)
const cart2 = new ShoppingCart(dateFormat(), account2)
// cart.addLineItem(listItem1);
// cart.addLineItem(listItem2);
// cart.addLineItem(listItem3);
// cart.addLineItem(listItem4);
cart1.addLineItem(listItem1);
cart1.addLineItem(listItem2);
// console.log(cart.getListItem());
// console.log(cart.toString());

const order1 = new Order("or001", dateFormat(), dateFormat(), "Nakhon Pathom", OrderStatus.HOLD, 0);
const order2 = new Order("or002", dateFormat(), dateFormat(), "Ratchaburi", OrderStatus.HOLD, 0);
order1.addLineItem(listItem1);
order2.addLineItem(listItem2);
console.log(order1.calculateTotal());
console.log(order2.calculateTotal());

// for(let i=0; i<listItem.length;i++){
//     console.log(listItem[i].calTotal())
// };
```