"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shopping = void 0;
class Shopping {
    constructor(createDate) {
        this.createDate = createDate;
    }
    getCreateDate() {
        return this.createDate;
    }
    setCreate(date) {
        this.createDate = date;
    }
    toString() {
        return `Shopping[createDate=${this.createDate}]`;
    }
}
exports.Shopping = Shopping;
