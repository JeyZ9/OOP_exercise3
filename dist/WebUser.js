"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebUser = void 0;
class WebUser {
    constructor(loginId, password, state, shoppingCart) {
        this.loginId = loginId;
        this.password = password;
        this.state = state;
        this.shoppingCart = shoppingCart;
    }
    getLoginId() {
        return this.loginId;
    }
    getPassword() {
        return this.password;
    }
    getState() {
        return this.state;
    }
    getShopping() {
        return this.shoppingCart;
    }
    setPassword(pass) {
        this.password = pass;
    }
    setSate(state) {
        this.state = state;
    }
    setShopping(shop) {
        this.shoppingCart = shop;
    }
    toString() {
        // return `WebUser[loginId=${this.loginId}, password=${this.password}, state=${this.state}, shopping=${this.shoppingCart.toString()}]`
        return `WebUser[loginId=${this.loginId}, password=${this.password}, state=${this.state}]`;
    }
}
exports.WebUser = WebUser;
