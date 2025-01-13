"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCart = void 0;
class ShoppingCart {
    constructor(createDate, account) {
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
    toString() {
        return `Shopping[createDate=${this.createDate}, account=${this.account.toString()}]`;
    }
}
exports.ShoppingCart = ShoppingCart;
