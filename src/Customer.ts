import { Account } from './Account';
import { WebUser } from './WebUser';
import { LineItem } from './LineItem';

export class Customer {
    private id: string;
    private webUser:WebUser;
    private account:Account;
    private address: string;
    private phone:string;
    private email:string;

    constructor(id:string, webUser:WebUser, account:Account,address:string, phone:string, email:string){
        this.id = id;
        this.webUser = webUser;
        this.account = account;
        this.address = address;
        this.phone = phone;
        this.email = email;
    }

    public getId():string{
        return this.id;
    }

    public getWebUser():WebUser {
        return this.webUser;
    }

    public getAccount():Account {
        return this.account;
    }

    public getAddress():string{
        return this.address;
    }

    public getPhone():string{
        return this.phone;
    }

    public getEmail():string{
        return this.email;
    }

    // public setId(id:string):void{
    //     this.id = id;
    // }

    public setWebUser(webUser:WebUser):void{
        this.webUser = webUser;
    }

    public setAccount(acc:Account):void {
        this.account = acc;
    }

    public setAddress(address:string):void{
        this.address = address;
    }

    public setPhone(phone:string):void{
        this.phone = phone;
    }

    public setEmail(email:string):void{
        this.email = email
    }

    public displayClass():string {
        const getCart:string = this.account.getShoppingCart().getLineItem().map(item => {
            // console.log(item.getProduct().getName())
            return item.getProduct().getName();
        }).join(",");
        // const orderItem = this.account.getOrder().map(item => {
        //     item.getLineItem().map(item => {
        //         // console.log(item)
        //         return item.getProduct().getName()
        //     }).join(",")
        // }).join(",");

        const getOrder = this.account.getOrder().map(item => {
            // return item.getLineItem();
            // console.log(item.getLineItem())
            return item.getLineItem().map(i => {
                // console.log(i.getProduct().getName());
                return i.getProduct().getName();
                // return i;
            // }).join(","+"\n")
            }).join(",")
        })

        // console.log("TEST: ", getCart)

        return `
            [
                name: ${this.webUser.getLoginId()},
                cart: ${getCart},
                order: ${getOrder},
                total: ${this.account.getOrder().map(item => item.calculateTotal())} ฿
            ]
        `;
        // return ``;
    }

    public toString():string {
        return `Customer[id=${this.id}, WebUser={${this.webUser.toString()}}, account={${this.account.toString()}} address=${this.address}, phone=${this.phone}, email=${this.email}]`
    }
}