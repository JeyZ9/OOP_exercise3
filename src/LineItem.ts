import { Product } from "./Product";

export class LineItem {
    private quantity:number;
    private price:number;
    private product:Product;

    constructor(quantity:number, price:number,product:Product){
        this.quantity = quantity ?? 0;
        this.price = price ?? 0;
        this.product = product;
    }

    public calTotal():number {
        return this.price * this.quantity;
    }

    public getQuantity():number {
        return this.quantity;
    }

    public getPrice():number {
        return this.price;
    }

    public getProduct():Product {
        return this.product;
    }

    public setPrice(price:number):void {
        this.price = price;
    }

    public setProduct(product:Product):void {
        this.product = product;
    }

    // public toString():string {
    //     return `LineItem[quantity=${this.quantity}, price=${this.price}, product=${this.product.toString()}]`;
    // }
    public toString():string {
        return `ชื่อ: ${this.product.getName()} ราคาต่อหน่วย: ${this.price} จำนวน: ${this.quantity}`
    }

    // New Commit

}