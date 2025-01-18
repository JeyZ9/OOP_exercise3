"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCart = void 0;
class ShoppingCart {
    constructor(createDate) {
        // private account:Account;
        this.lineItems = [];
        this.createDate = createDate;
    }
    // constructor(createDate:string, account:Account){
    //     this.createDate = createDate;
    //     this.account = account;
    // }
    getCreateDate() {
        return this.createDate;
    }
    getLineItem() {
        return this.lineItems;
    }
    // public getAccount():Account{
    //     return this.account;
    // }
    setCreate(date) {
        this.createDate = date;
    }
    // public setAccount(acc:Account):void{
    //     this.account = acc;
    // }
    addLineItem(item) {
        this.lineItems.push(item);
    }
    getListItem() {
        // return this.lineItems.map(item => item.toString());
        return this.lineItems.flat();
        // return this.lineItems.map(item => ({...item}))
    }
    displayLineItem() {
        return this.lineItems.map(item => item.toString()).toString();
    }
    toString() {
        // return `Shopping[createDate=${this.createDate}, account=${this.account.toString()}, lineItem={${this.lineItems.map(item => item.toString()).join(",")}}]`;
        return `Shopping[createDate=${this.createDate}, lineItem={${this.lineItems.map(item => item.toString()).join(",")}}]`;
    }
}
exports.ShoppingCart = ShoppingCart;
