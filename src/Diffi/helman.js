import Generate from "../Generate.js";
import Client from "./Client.js";
import listener from "./listener.js";

export default class helman  {

    constructor()
    {
        const gen = new Generate();
        let p;
        let g;

        do {
        g = gen.create(4);
        p = gen.create(4);
        console.log("create p g")
        //document.write("create p g")
        }
        while (p==g)

        const Alice = new Client(g,p,"Alice");
        const Bob = new Client(g,p,"Bob");
        const Eve = new listener("Eve");
        console.log("eve")
        //document.write("eve")
        while (Alice.getA() == Bob.getA())
        {  
            g = gen.create(4);
            p = gen.create(4); 
            Alice.generateSecret(g,p); 
            Bob.generateSecret(g,p);
            console.log(Alice.getA(),Bob.getA(),p,g)
            //document.write(Alice.getA(),Bob.getA(),p,g)
        }
        Alice.CreateK(Bob.getA())
        Bob.CreateK(Alice.getA())

        Eve.listen(p,g,Alice.getA(), Bob.getA());

        Alice.ShowCLInfo();
        Bob.ShowCLInfo();
        Eve.Pas();
        console.log()
        Alice.ShowK();
        Eve.Chek(Bob.ShowK());
    }

 }