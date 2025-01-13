"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserSate_1 = require("./UserSate");
const { Product } = require("./Product");
const product1 = new Product("001", "Lay", "Wisarut");
// console.log(product1.toString());
// ///////////////////////////////////////////////////// //
const { WebUser } = require("./WebUser");
const { Customer } = require("./Customer");
const { Account } = require("./Account");
const webUser1 = new WebUser("jeyer", "123456", UserSate_1.UserSate.NEW);
const customer1 = new Customer("01", webUser1, "Nakhon Pathom", "0656683656", "jey@gmail.com");
const { Payment } = require("./Payment");
const payment1 = new Payment("py001", 100, "credit");
// console.log(payment1.toString());
const account1 = new Account("ac01", customer1, payment1, "Nakhon Pathom", false, "07:00", "16:00");
console.log(account1.toString());
