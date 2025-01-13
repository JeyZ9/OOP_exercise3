import { Account } from './Account';

export class ShoppingCart{
    private createDate:string;
    private account:Account;

    constructor(createDate:string, account:Account){
        this.createDate = createDate;
        this.account = account;
    }

    public getCreateDate():string {
        return this.createDate;
    }

    public getAccount():Account{
        return this.account;
    }

    public setCreate(date:string):void {
        this.createDate = date;
    }

    public setAccount(acc:Account):void{
        this.account = acc;
    }

    public toString():string {
        return `Shopping[createDate=${this.createDate}, account=${this.account.toString()}]`;
    }
}