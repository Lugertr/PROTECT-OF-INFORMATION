import RSA from "./rsa.js";
import Generate from "../Generate.js";

export default class DoRSA{

    constructor() {
        const gen = new Generate();

        console.log("Алиса")
        //document.write("Алиса")
        const Alice = new RSA();
        console.log("bob")
        //document.write("bob")
        const Bob = new RSA();

        Alice.encrypt(Bob.crypt(Bob.sendM(),...Alice.getKey()));
        
        console.log(Alice.modInverse(17,780))
    }


}