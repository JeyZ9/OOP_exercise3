"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const OrderStatus_1 = require("./OrderStatus");
const UserSate_1 = require("./UserSate");
const { Product } = require("./Product");
const { WebUser } = require("./WebUser");
const { Customer } = require("./Customer");
const { Account } = require("./Account");
const { Payment } = require("./Payment");
const { Order } = require("./Order");
const { LineItem } = require("./LineItem");
const { ShoppingCart } = require("./ShoppingCart");
// console.log(product1.toString());
const dateFormat = () => {
    let date = new Date();
    return date.toLocaleDateString();
};
// ///////////////////////////////////////////////////// //
const product1 = new Product("001", "Lay1", "Wisarut");
const product2 = new Product("002", "Lay2", "Wisarut");
const product3 = new Product("003", "Lay3", "Wisarut");
const product4 = new Product("004", "Lay4", "Wisarut");
const listItem = [
    new LineItem(10, 12, product1),
    new LineItem(10, 12, product2),
    new LineItem(10, 12, product3),
    new LineItem(10, 12, product4)
];
// const listItem1 = new LineItem(10, 12, product1)
// const listItem2 = new LineItem(10, 12, product2)
// const listItem3 = new LineItem(10, 12, product3)
// const listItem4 = new LineItem(10, 12, product4)
const webUser1 = new WebUser("jeyer", "123456", UserSate_1.UserSate.NEW);
const customer1 = new Customer("01", webUser1, "Nakhon Pathom", "0656683656", "jey@gmail.com");
const payment1 = new Payment("py001", 100, "credit");
const account1 = new Account("ac01", customer1, payment1, "Nakhon Pathom", false, "07:00", "16:00");
const cart = new ShoppingCart(dateFormat(), account1);
// cart.addLineItem(listItem1);
// cart.addLineItem(listItem2);
// cart.addLineItem(listItem3);
// cart.addLineItem(listItem4);
cart.addLineItem(listItem);
// console.log(cart.getListItem());
console.log(cart.toString());
const order1 = new Order("or001", dateFormat(), dateFormat(), "Nakhon Pathom", OrderStatus_1.OrderStatus.HOLD, 10);
order1.addLineItem(listItem);
// console.log(order1.toString());
