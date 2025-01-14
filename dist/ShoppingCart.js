"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCart = void 0;
class ShoppingCart {
    // constructor(createDate:string){
    //     this.createDate = createDate;
    // }
    constructor(createDate, account) {
        this.lineItems = [];
        this.createDate = createDate;
        this.account = account;
    }
    getCreateDate() {
        return this.createDate;
    }
    getAccount() {
        return this.account;
    }
    setCreate(date) {
        this.createDate = date;
    }
    setAccount(acc) {
        this.account = acc;
    }
    addLineItem(item) {
        this.lineItems.push(item);
    }
    getListItem() {
        return this.lineItems.map(item => item.toString());
    }
    toString() {
        return `Shopping[createDate=${this.createDate}, account=${this.account.toString()}, lineItem={${this.lineItems.map(item => item.toString()).join(",")}}]`;
    }
}
exports.ShoppingCart = ShoppingCart;
