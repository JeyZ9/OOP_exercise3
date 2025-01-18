"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
class Customer {
    constructor(id, webUser, account, address, phone, email) {
        this.id = id;
        this.webUser = webUser;
        this.account = account;
        this.address = address;
        this.phone = phone;
        this.email = email;
    }
    getId() {
        return this.id;
    }
    getWebUser() {
        return this.webUser;
    }
    getAccount() {
        return this.account;
    }
    getAddress() {
        return this.address;
    }
    getPhone() {
        return this.phone;
    }
    getEmail() {
        return this.email;
    }
    // public setId(id:string):void{
    //     this.id = id;
    // }
    setWebUser(webUser) {
        this.webUser = webUser;
    }
    setAccount(acc) {
        this.account = acc;
    }
    setAddress(address) {
        this.address = address;
    }
    setPhone(phone) {
        this.phone = phone;
    }
    setEmail(email) {
        this.email = email;
    }
    toString() {
        return `Customer[id=${this.id}, WebUser={${this.webUser.toString()}}, account={${this.account.toString()}} address=${this.address}, phone=${this.phone}, email=${this.email}]`;
    }
}
exports.Customer = Customer;
