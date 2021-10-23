import Generate from "../Generate.js";
import * as fs from 'fs';

export default class SPR {
    solt;
    hash;

    constructor()
    {

        // try {
        //      fs = require('fs'); 
        //      var readMe = fs.readFileSync("C:/it4kors/zashita/first/src/SPR/data.txt",'utf8');
                var array = fs.readFileSync("C:/it4kors/zashita/first/src/SPR/data.txt",'utf8').toString().replace({}).split(','+';');
                for(let i in array) {
                }
                console.log(array);
          //}
         // catch{
           //  throw new Error(`Не удалось прочитать файл`)
         //}

    

    }

    do(login) {
        let gen = new Generate();
        this.solt = new Date().toString();
        this.solt = this.solt.replace(/[^0-9]/g, '');
        this.hash = login.toString() + this.solt.toString();
       //сравнение
       console.log(this.hash)
       console.log(this.solt)
    }

    sol() {
        return this.solt;
    }
}