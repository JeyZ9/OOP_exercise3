"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
const ShoppingCart_1 = require("./ShoppingCart");
class Account {
    constructor(id, billingAddress, isClosed, open, close) {
        // private customer:Customer;
        this.orderLists = [];
        // private shoppingCart:ShoppingCart;
        this.payment = [];
        this.id = id;
        this.shoppingCart = new ShoppingCart_1.ShoppingCart(new Date().toLocaleDateString());
        this.billingAddress = billingAddress;
        this.isClosed = isClosed;
        this.open = open;
        this.close = close;
    }
    // constructor(id:string, customer:Customer, shoppingCart:ShoppingCart, payment:Payment, billingAddress:string, isClosed:boolean, open:string, close:string) {
    //     this.id = id;
    //     this.customer = customer;
    //     this.shoppingCart = shoppingCart;
    //     this.payment = payment;
    //     this.billingAddress = billingAddress;
    //     this.isClosed = isClosed;
    //     this.open = open;
    //     this.close = close;
    // }
    // constructor(id:string, customer:Customer, shoppingCart:ShoppingCart, payment:Payment, billingAddress:string, isClosed:boolean, open:string, close:string) {
    //     this.id = id;
    //     this.customer = customer;
    //     this.shoppingCart = shoppingCart;
    //     this.payment = payment;
    //     this.billingAddress = billingAddress;
    //     this.isClosed = isClosed;
    //     this.open = open;
    //     this.close = close;
    // }
    getId() {
        return this.id;
    }
    // public getCustomer():Customer{
    //     return this.customer;
    // }
    getOrder() {
        return this.orderLists;
    }
    getShoppingCart() {
        return this.shoppingCart;
    }
    getPayment() {
        return this.payment;
    }
    getBillingAddress() {
        return this.billingAddress;
    }
    getIsClosed() {
        return this.isClosed;
    }
    getOpen() {
        return this.open;
    }
    getClose() {
        return this.close;
    }
    // public addOrderByCart():void{
    //     this.orderLists.
    // }
    setId(id) {
        this.id = id;
    }
    // public setCustomer(customer:Customer):void {
    //     this.customer = customer
    // }
    setShoppingCart(cart) {
        this.shoppingCart = cart;
    }
    // public setPayment(pay:Payment):void {
    //     this.payment = pay;
    // }
    setBillingAddress(bilAd) {
        this.billingAddress = bilAd;
    }
    setIsClose(close) {
        this.isClosed = close;
    }
    setOpen(open) {
        this.open = open;
    }
    setClose(close) {
        this.close = close;
    }
    addOrderList(order) {
        if (Array.isArray(order)) {
            this.orderLists.push(...order);
        }
        else {
            this.orderLists.push(order);
        }
    }
    addPayment(pay) {
        if (Array.isArray(pay)) {
            this.payment.push(...pay);
        }
        else {
            this.payment.push(pay);
        }
    }
    // public makeOrder(order:Order):void {
    //     order.addLineItem(this.shoppingCart.getListItem());
    //     this.orderLists.push(order);
    // }
    // private dateFormat(date:Date):string{
    //     let d = new Date(date);
    //     return d.toLocaleTimeString();
    // }
    toString() {
        // return `Account[id=${this.id}, Customer{${this.customer.toString()}}, Payment{payment=${this.payment.toString()}}, billingAddress=${this.billingAddress}, isClose=${this.isClosed}, open=${this.open}, close=${this.close}]`
        return `Account[id=${this.id}, ShoppingCart={${this.shoppingCart.toString()}}, Payment{payment=${this.payment.toString()}}, billingAddress=${this.billingAddress}, isClose=${this.isClosed}, open=${this.open}, close=${this.close}]`;
    }
}
exports.Account = Account;
