import { ShoppingCart } from "./ShoppingCart";
import { UserSate } from "./UserSate";

export class WebUser {
    private loginId:string;
    private password:string;
    private state:UserSate;
    private shoppingCart:ShoppingCart;

    constructor(loginId:string, password:string, state:UserSate, shoppingCart:ShoppingCart){
        this.loginId = loginId;
        this.password = password;
        this.state = state;
        this.shoppingCart = shoppingCart;
    }

    public getLoginId():string{
        return this.loginId;
    }

    public getPassword():string {
        return this.password;
    }

    public getState():UserSate{
        return this.state;
    }

    public getShopping():ShoppingCart{
        return this.shoppingCart;
    }

    public setPassword(pass:string):void {
        this.password = pass;
    }

    public setSate(state:UserSate):void {
        this.state = state;
    }

    public setShopping(shop:ShoppingCart):void {
        this.shoppingCart = shop;
    }

    public toString():string {
        return `WebUser[loginId=${this.loginId}, password=${this.password}, state=${this.state}, shopping=${this.shoppingCart.toString()}]`
    }
}