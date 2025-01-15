import { LineItem } from "./LineItem";
import { OrderStatus } from "./OrderStatus";

export class Order {
    private number:string;
    private orderedDate:string;
    private shippedDate:string;
    private shipToAddress:string;
    private status:OrderStatus;
    private total:number;
    private lineItems:LineItem[] = [];

    constructor(number:string, orderedDate:string, shippedDate:string, shipToAddress:string, status:OrderStatus, total:number) {
        this.number = number;
        this.orderedDate = orderedDate;
        this.shippedDate = shippedDate;
        this.shipToAddress = shipToAddress;
        this.status = status;
        this.total = total ?? 0;
    }

    public calculateTotal(): number {
        return this.lineItems.reduce((sum, item) => sum + item.calTotal(), 0);
    }

    public getNumber():string {
        return this.number;
    }

    public getOrderedDate():string {
        return this.orderedDate;
    }

    public getShippedDate():string {
        return this.shippedDate
    }

    public getShipToAddress():string {
        return this.shipToAddress;
    }

    public getStatus():OrderStatus {
        return this.status;
    }

    public getTotal():number {
        return this.total;
    }

    public addLineItem(item:LineItem | LineItem[]):void{
        if(Array.isArray(item)){
            this.lineItems.push(...item);
        }else{
            this.lineItems.push(item);
        }
        // this.total = this.calculateTotal()
    }

    public setOrderedDate(date:string):void {
        this.orderedDate = date;
    }

    public setShippedDate(date:string):void {
        this.shippedDate = date;
    }

    public setShipToAddress(address:string):void{
        this.shipToAddress = address;
    }

    public setStatus(status:OrderStatus):void {
        this.status = status;
    }

    public setTotal(total:number):void{
        this.total = total;
    }

    public toString():string {
        return `Order[number=${this.number}, orderedDate=${this.orderedDate}, shippedDate=${this.shippedDate}, shipToAddress=${this.shipToAddress}, status=${this.status}, total=${this.total}, lineItem[lineItem=${this.lineItems.map(item => item.toString()).join(",")}]]`;
    }

}