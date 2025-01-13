import { WebUser } from './WebUser';

export class Customer {
    private id: string;
    private webUser:WebUser;
    private address: string;
    private phone:string;
    private email:string;

    constructor(id:string, webUser:WebUser, address:string, phone:string, email:string){
        this.id = id;
        this.webUser = webUser;
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

    public setAddress(address:string):void{
        this.address = address;
    }

    public setPhone(phone:string):void{
        this.phone = phone;
    }

    public setEmail(email:string):void{
        this.email = email
    }

    public toString():string {
        return `Customer[id=${this.id}, WebUser={${this.webUser.toString()}} address=${this.address}, phone=${this.phone}, email=${this.email}]`
    }
}