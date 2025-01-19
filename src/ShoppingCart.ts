// import { Account } from './Account';
import { LineItem } from './LineItem';

export class ShoppingCart{
    private createDate:string;
    // private account:Account;
    private lineItems:LineItem[] = [];

    constructor(createDate:string){
        this.createDate = createDate;
    }
    // constructor(createDate:string, account:Account){
    //     this.createDate = createDate;
    //     this.account = account;
    // }

    public getCreateDate():string {
        return this.createDate;
    }

    public getLineItem():LineItem[]{
        return this.lineItems;
    }

    // public getAccount():Account{
    //     return this.account;
    // }

    public setCreate(date:string):void {
        this.createDate = date;
    }

    // public setAccount(acc:Account):void{
    //     this.account = acc;
    // }

    public addLineItem(item:LineItem):void{
        if(Array.isArray(item)){
            const add = item.flat()
            this.lineItems.push(...add);
        }else{
            this.lineItems.push(item);
        }
    }

    public getListItem():LineItem[]{
        // return this.lineItems.map(item => item.toString());
        return this.lineItems.flat();
        // return this.lineItems.map(item => ({...item}))
    }

    public displayLineItem():string{
        return this.lineItems.map(item => item.toString()).toString();
    }

    public toString():string {
        // return `Shopping[createDate=${this.createDate}, account=${this.account.toString()}, lineItem={${this.lineItems.map(item => item.toString()).join(",")}}]`;
        return `Shopping[createDate=${this.createDate}, lineItem={${this.lineItems.map(item => item.toString()).join(",")}}]`;
    }
}