"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
class Payment {
    constructor(id, paid, total, details) {
        this.id = id;
        this.paid = paid;
        this.total = total;
        this.details = details;
    }
    getId() {
        return this.id;
    }
    getPaid() {
        return this.paid;
    }
    getTotal() {
        return this.total;
    }
    getDetail() {
        return this.details;
    }
    setPaid(paid) {
        this.paid = paid;
    }
    setTotal(total) {
        this.total = total;
    }
    setDetails(detail) {
        this.details = detail;
    }
    toString() {
        return `Payment[id=${this.id}, paid=${this.paid}, total=${this.total}, details=${this.details}]`;
    }
}
exports.Payment = Payment;
