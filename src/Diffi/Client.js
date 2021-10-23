import Generate from "../Generate.js";

export default class Client {
    g;p;name;a;A;K;

    constructor(g,p,name) {
        this.name = name;
        this.generateSecret(g,p);

    }

    generateSecret(g,p) {
        const gen = new Generate();
        this.g = g;
        this.p = p;
        this.a = gen.create(4);
        this.A = this.CulcA();
    }

    CulcA() {
        return ((BigInt(this.g) ** this.a) % BigInt(this.p));
    }
    
    getA() {
        return this.A
    }

    ShowCLInfo() {
        console.log("Client "+this.name+"; "+this.name[0]+ " = " + this.A)
        //document.write("Client "+this.name+"; "+this.name[0]+ " = " + this.A)
    }

    ShowPandG() {
        console.log("p = " + this.p + "; g = " + this.g)
        //document.write("p = " + this.p + "; g = " + this.g)
    }

    CreateK(B) {
        this.K = (B**this.a) % this.p
    }

    ShowK()
    {
        console.log(this.name + " got K = " +this.K)
        //document.write(this.name + " got K = " +this.K)
        return this.K;
    }
}