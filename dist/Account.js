"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
class Account {
    constructor(id, customer, payment, billingAddress, isClosed, open, close) {
        this.orderLists = [];
        this.id = id;
        this.customer = customer;
        this.payment = payment;
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
    getId() {
        return this.id;
    }
    getCustomer() {
        return this.customer;
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
    setCustomer(customer) {
        this.customer = customer;
    }
    setPayment(pay) {
        this.payment = pay;
    }
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
    // public makeOrder(order:Order):void {
    //     order.addLineItem(this.shoppingCart.getListItem());
    //     this.orderLists.push(order);
    // }
    // private dateFormat(date:Date):string{
    //     let d = new Date(date);
    //     return d.toLocaleTimeString();
    // }
    toString() {
        return `Account[id=${this.id}, Customer{${this.customer.toString()}}, Payment{payment=${this.payment.toString()}}, billingAddress=${this.billingAddress}, isClose=${this.isClosed}, open=${this.open}, close=${this.close}]`;
    }
}
exports.Account = Account;
