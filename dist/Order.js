"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
class Order {
    constructor(number, orderedDate, shippedDate, shipToAddress, status, total) {
        this.lineItems = [];
        this.number = number;
        this.orderedDate = orderedDate;
        this.shippedDate = shippedDate;
        this.shipToAddress = shipToAddress;
        this.status = status;
        this.total = total !== null && total !== void 0 ? total : 0;
    }
    calculateTotal() {
        return this.lineItems.reduce((sum, item) => sum + item.calTotal(), 0);
    }
    getNumber() {
        return this.number;
    }
    getOrderedDate() {
        return this.orderedDate;
    }
    getShippedDate() {
        return this.shippedDate;
    }
    getShipToAddress() {
        return this.shipToAddress;
    }
    getStatus() {
        return this.status;
    }
    getTotal() {
        return this.total;
    }
    addLineItem(item) {
        if (Array.isArray(item)) {
            this.lineItems.push(...item);
        }
        else {
            this.lineItems.push(item);
        }
        // this.total = this.calculateTotal()
    }
    setOrderedDate(date) {
        this.orderedDate = date;
    }
    setShippedDate(date) {
        this.shippedDate = date;
    }
    setShipToAddress(address) {
        this.shipToAddress = address;
    }
    setStatus(status) {
        this.status = status;
    }
    setTotal(total) {
        this.total = total;
    }
    toString() {
        return `Order[number=${this.number}, orderedDate=${this.orderedDate}, shippedDate=${this.shippedDate}, shipToAddress=${this.shipToAddress}, status=${this.status}, total=${this.total}, lineItem[lineItem=${this.lineItems.map(item => item.toString()).join(",")}]]`;
    }
}
exports.Order = Order;
