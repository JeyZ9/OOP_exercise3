"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
class Customer {
    constructor(id, webUser, address, phone, email) {
        this.id = id;
        this.webUser = webUser;
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
        return `Customer[id=${this.id}, WebUser={${this.webUser.toString()}} address=${this.address}, phone=${this.phone}, email=${this.email}]`;
    }
}
exports.Customer = Customer;
