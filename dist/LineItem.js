"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LineItem = void 0;
class LineItem {
    constructor(quantity, price, product) {
        this.quantity = quantity !== null && quantity !== void 0 ? quantity : 0;
        this.price = price !== null && price !== void 0 ? price : 0;
        this.product = product;
    }
    calTotal() {
        // let cal:number = this.price * this.quantity;
        return this.price * this.quantity;
    }
    getQuantity() {
        return this.quantity;
    }
    getPrice() {
        return this.price;
    }
    getProduct() {
        return this.product;
    }
    setPrice(price) {
        this.price = price;
    }
    setProduct(product) {
        this.product = product;
    }
    // public toString():string {
    //     return `LineItem[quantity=${this.quantity}, price=${this.price}, product=${this.product.toString()}]`;
    // }
    toString() {
        return `ชื่อ: ${this.product.getName()} ราคาต่อหน่วย: ${this.price} จำนวน: ${this.quantity}`;
    }
}
exports.LineItem = LineItem;
