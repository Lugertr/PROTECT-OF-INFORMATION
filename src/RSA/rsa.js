import Generate from "../Generate.js";

export default class RSA {
   Opkey=[];Clkey=[];
   mes;
   c;
   
    constructor() {
        let eil,e,n,d=0,p,q;
        const gen = new Generate();

        do {
            p = Number(gen.create(4));
            q = Number(gen.create(4));
         } 
         while (p==q)

        n = Number(p*q);
        eil = this.lcm((p-1),(q-1));
         do {
         e = Number(gen.create(4));
        } while ((e>=eil) && (eil % e == 0))

        this.Opkey.push(e);
        this.Opkey.push(n);

    
        // let b=0;
        // while (d==0)
        // {   if (((e*b)%eil) == 1) 
        //         d=b;
        //     else 
        //         b=b+1;
        // }
        d = this.modInverse(e,eil);
    
        this.Clkey.push(d);
        this.Clkey.push(n);

        console.log(this.Opkey)
        console.log(this.Clkey)
        //document.write(this.Opkey)
        //document.write(this.Clkey)
    }

    getKey() {
        return this.Opkey
    }

    sendM() {
        const gen = new Generate();
        do {
        this.mes = Number(gen.create(2));
        } while (this.mes>(this.n-1))
        console.log("message")
        //document.write("message")
        console.log(this.mes)
        //document.write(this.mes)
        return this.mes
    }

    crypt(mes,e,n) {
        this.c = (BigInt(mes)**BigInt(e)) % BigInt(n);
        return this.c
    }

    encrypt(Cmes) {
        this.mes = (Cmes ** BigInt(this.Clkey[0])) % BigInt(this.Clkey[1]);
        console.log("рассшифровка")
        //document.write("рассшифровка")
        console.log(this.mes)
        //document.write(this.mes)
    }

    lcm(a,b) {
        let hcf;
        for (let i = 1; i <= a && i <= b; i++) {
            if( a % i == 0 && b % i == 0) {
                hcf = i;
            }
        }
        return (a * b) / hcf;
    }

   xgcd(a, b) { 

        if (b == 0) {
          return [1, 0, a];
        }
     
        let temp = this.xgcd(b, a % b);
        let x = temp[0];
        let y = temp[1];
        let d = temp[2];
        return [y, x-y*Math.floor(a/b), d];
      }

      modInverse(a, m)
      {
          let m0 = m;
          let y = 0;
          let x = 1;
       
          if (m == 1)
              return 0;
       
          while (a > 1)
          {
               
              // q is quotient
              let q = parseInt(a / m);
              let t = m;
       
              // m is remainder now,
              // process same as
              // Euclid's algo
              m = a % m;
              a = t;
              t = y;
       
              // Update y and x
              y = x - q * y;
              x = t;
          }
       
          // Make x positive
          if (x < 0)
              x += m0;
       
          return x;
      }
   
}