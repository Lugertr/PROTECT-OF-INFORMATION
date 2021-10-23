import Hash from "./Hash.js";
import SPR from "./SPR.js";

export default class HashClient {
    login;
    password;
    x;

    constructor(login,password)
    {
        //this.login = login;
        //this.password = password;

        //let Server = new SPR();
        let Server = new Hash(this.login);
        //this.x = Server.sol();
     //Server.sha256('12345678901234561234567890123456');
     console.log(Server.hash(''));
    }
} 