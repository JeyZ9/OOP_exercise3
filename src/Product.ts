export class Product {
    private id:string;
    private name:string;
    private supplier:string;

    constructor(id:string, name:string, supplier:string){
        this.id = id;
        this.name = name;
        this.supplier = supplier;
    }

    public getId():string {
        return this.id;
    }

    public getName():string {
        return this.name;
    }

    public getSupplier():string {
        return this.supplier;
    }

    public setName(name:string):void {
        this.name = name;
    }

    public setSupplier(supp:string):void {
        this.supplier = supp;
    }

    public toString():string{
        return `Product[id=${this.id}, name=${this.name}, supplier=${this.supplier}]`
    }
}