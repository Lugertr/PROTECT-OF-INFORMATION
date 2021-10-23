import Generate from "../Generate.js";

export default class listener {
name;p;g;A;B;
    constructor(name)
    {
        this.name = name;
    }

    listen(p,g,A,B) {
        this.p = p;
        this.g = g;
        this.A = A;
        this.B = B;
    }

    Pas() {
        console.log(this.name + " knows" + " p = " + this.p + " g = " + this.g + " A = " + this.A + " B = " + this.B )
    }

    Chek(K)
    {
    
        for (let i=0;i<15;i++)
        {
        let gen = new Generate();
        let r = gen.create(4);
        let b = (this.A**r) % this.p;
        let a = (this.B**r) % this.p;
        //console.log(b+a)
            if ((b==K) || (a==K)) {
                console.log("Eve has a K")
                //document.write("Eve has a K")
                return 
            } 
        }
        console.log("Eve doesn't have K")
        //document.write("Eve doesn't have K")
    }
}