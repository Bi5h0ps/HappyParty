export class Client {
    ClientId : number;
    FirstName : string; 
    LastName : string;
    VipLevel : number;

    constructor(id:number, fn: string, ln:string, vip:number) {
        this.ClientId = id;
        this.FirstName = fn;
        this.LastName = ln;
        this.VipLevel = vip;
    }
}
