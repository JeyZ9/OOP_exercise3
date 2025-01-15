export class Payment {
    private id:string;
    private paid:string;
    private total:number;
    private details:string;

    constructor(id:string, paid:string, total:number, details:string){
        this.id = id;
        this.paid = paid;
        this.total = total;
        this.details = details;
    }

    public getId():string{
        return this.id;
    }

    public getPaid():string{
        return this.paid;
    }

    public getTotal():number {
        return this.total;
    }

    public getDetail():string {
        return this.details;
    }

    public setPaid(paid:string):void {
        this.paid = paid;
    }

    public setTotal(total:number):void {
        this.total = total;
    }

    public setDetails(detail:string):void {
        this.details = detail;
    }

    public toString():string {
        return `Payment[id=${this.id}, paid=${this.paid}, total=${this.total}, details=${this.details}]`
    }
}