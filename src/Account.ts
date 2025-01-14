import { Customer } from "./Customer";
import { Order } from "./Order";
import { Payment } from "./Payment";
import { ShoppingCart } from "./ShoppingCart";

export class Account{
    private id:string;
    private customer:Customer;
    private orderLists:Order[] = [];
    // private shoppingCart:ShoppingCart;
    private payment:Payment;
    private billingAddress:string;
    private isClosed:boolean;
    private open:string;
    private close:string;

    constructor(id:string, customer:Customer, payment:Payment, billingAddress:string, isClosed:boolean, open:string, close:string) {
        this.id = id;
        this.customer = customer;
        this.payment = payment;
        this.billingAddress = billingAddress;
        this.isClosed = isClosed;
        this.open = open;
        this.close = close;
    }
    // constructor(id:string, customer:Customer, shoppingCart:ShoppingCart, payment:Payment, billingAddress:string, isClosed:boolean, open:string, close:string) {
    //     this.id = id;
    //     this.customer = customer;
    //     this.shoppingCart = shoppingCart;
    //     this.payment = payment;
    //     this.billingAddress = billingAddress;
    //     this.isClosed = isClosed;
    //     this.open = open;
    //     this.close = close;
    // }

    public getId():string{
        return this.id;
    }

    public getCustomer():Customer{
        return this.customer;
    }

    public getPayment():Payment{
        return this.payment;
    }

    public getBillingAddress():string {
        return this.billingAddress;
    }

    public getIsClosed():boolean {
        return this.isClosed;
    }

    public getOpen():string {
        return this.open;
    }

    public getClose():string{
        return this.close;
    }

    // public addOrderByCart():void{
    //     this.orderLists.
    // }

    public setId(id:string):void {
        this.id = id;
    }

    public setCustomer(customer:Customer):void {
        this.customer = customer
    }

    public setPayment(pay:Payment):void {
        this.payment = pay;
    }

    public setBillingAddress(bilAd:string):void{
        this.billingAddress = bilAd;
    }

    public setIsClose(close:boolean):void {
        this.isClosed = close;
    }

    public setOpen(open:string):void{
        this.open = open;
    }

    public setClose(close:string):void {
        this.close = close;
    }

    // public makeOrder(order:Order):void {
    //     order.addLineItem(this.shoppingCart.getListItem());
    //     this.orderLists.push(order);
    // }

    // private dateFormat(date:Date):string{
    //     let d = new Date(date);
    //     return d.toLocaleTimeString();
    // }

    public toString():string {
        return `Account[id=${this.id}, Customer{${this.customer.toString()}}, Payment{payment=${this.payment.toString()}}, billingAddress=${this.billingAddress}, isClose=${this.isClosed}, open=${this.open}, close=${this.close}]`
    }
}