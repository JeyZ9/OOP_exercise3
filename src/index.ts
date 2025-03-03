// import { AccountDTO } from "./dto/AccountDTO";
// import { CustomerDTO } from "./dto/CustomerDTO";
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

const dateFormat = ():string => {
    let date = new Date();
    return date.toLocaleDateString();
}

const product1 = new Product("001", "ดินสอ", "Wisarut");
const product2 = new Product("002", "ยางลบ", "Wisarut");
const product3 = new Product("003", "พู่กัน", "Wisarut");
const product4 = new Product("004", "สีน้ำ", "Wisarut");
const product5 = new Product("004", "กระดาษวาดรูป", "Wisarut");

const listItem1 = [ 
    new LineItem(10, 12, product1),
    new LineItem(10, 12, product2),
    new LineItem(10, 12, product3),
    new LineItem(10, 12, product4)
] 
const listItem2 = [ 
    new LineItem(10, 12, product1),
    new LineItem(10, 12, product4),
    new LineItem(10, 12, product5)
]

const webUser1 = new WebUser("jeyer", "123456", UserSate.NEW);
const webUser2 = new WebUser("wisarut", "123456", UserSate.ACTIVE);

const payment1 = new Payment("py001", "pay", 1000, "credit");
const payment2 = new Payment("py001", "pay", 1000, "credit");

const cart1 = new ShoppingCart(dateFormat())
const cart2 = new ShoppingCart(dateFormat())

// cart2.addLineItem(listItem2);
// cart1.addLineItem(listItem1);

// console.log(order1.calculateTotal());

const order1 = new Order("or001", dateFormat(), dateFormat(), "Nakhon Pathom", OrderStatus.HOLD, 0);
order1.addLineItem(listItem1);
order1.addPayment(payment1);
order1.setTotal(order1.calculateTotal());

const account1 = new Account("ac01", cart1, "Nakhon Pathom", false, "07:00", "16:00")
account1.addOrderList(order1);
account1.addPayment(payment1);
account1.getShoppingCart().addLineItem(listItem1);

const order2 = new Order("or002", dateFormat(), dateFormat(), "Ratchaburi", OrderStatus.HOLD, 0);
order2.addLineItem(listItem2);
order2.addPayment(payment2);
order2.setTotal(order2.calculateTotal());

const account2 = new Account("ac02", cart2, "Ratchaburi", false, "22/1/2568", "2/3/2568")
account2.addOrderList(order2);
account2.addPayment(payment2);
account2.getShoppingCart().addLineItem(listItem2);

const customer1 = new Customer("01", webUser1, account1, "Nakhon Pathom", "0656683656", "jey@gmail.com")
const customer2 = new Customer("02", webUser2, account2, "Ratchaburi", "0987819512", "rut@gmail.com")

console.log("#######################User1#####################");
// console.log("Name:", customer1.webUser.getLoginId());
// console.log("Cart:", customer1.account.shoppingCart.getLineItem());
// console.log("Orders:", customer1.account.getOrder());
console.log(customer1.displayClass());

console.log("\n#######################User2#####################");
// console.log("Name:", customer2.webUser.getLoginId());
// console.log("Cart:", customer2.getAccount().getShoppingCart().getLineItem());
// console.log("Orders:", customer1.getAccount().getOrder());
console.log(customer2.displayClass());

// console.log("#######################User1#####################")
// console.log(order1.toString());
// console.log("#######################Cart1##########################")
// // console.log(cart1.toString())
// console.log(cart1.getLineItem())
// console.log("#################################################")

// console.log("#######################User2#####################")
// console.log(order2.toString());
// console.log("#######################Cart2##########################")
// // console.log(cart2.toString());
// console.log(cart2.getLineItem())
// console.log("#################################################")

// console.log(order1.getLineItem());
// console.log(order1.calculateTotal())

// const mapToDTO = (customer: Customer): CustomerDTO => {
//     return {
//       name: customer.webUser.getLoginId(),
//       cart: customer
//         ?.getAccount()
//         ?.getShoppingCart()
//         ?.getLineItem()
//         ?.getProduct()
//         ?.getName() || null, 
//       order: customer
//         ?.getAccount()
//         ?.getOrder()
//         ?.getLineItem()
//         ?.getProduct()
//         ?.getName() || null,
//       total: customer.getAccount()?.getOrder()?.calculateTotal() || 0,
//     };
//   };
