import { LineItem } from "./LineItem";
import { OrderStatus } from "./OrderStatus";
import { Payment } from "./Payment";

export class Order {
    private number:string;
    private orderedDate:string;
    private shippedDate:string;
    private shipToAddress:string;
    private status:OrderStatus;
    private total:number;
    private lineItems:LineItem[] = [];
    private payments:Payment[] = [];

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
            const add = item.flat()
            this.lineItems.push(...add);
        }else{
            this.lineItems.push(item);
        }
        // this.total = this.calculateTotal()
    }

    public getLineItem():LineItem[] {
        return this.lineItems.flat();
    }

    public displayLineItem():string{
        return this.lineItems.map(item => item.toString()).toString();
    }

    public addPayment(pay:Payment | Payment[]):void {
        if(Array.isArray(pay)){
            this.payments.push(...pay);
        }else{
            this.payments.push(pay);
        }
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