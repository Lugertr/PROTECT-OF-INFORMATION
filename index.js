import Coder from "./src/ceaser.js";
import Generate from "./src/Generate.js";
import helman from "./src/Diffi/helman.js";
import DoRSA from "./src/RSA/DoRSA.js";

//const TestNumber = new helman();

const code = "src/txt/test.txt";
const decode = "src/txt/Decod.txt"
const over = "src/txt/analitik.txt"

const test = new Coder(code,decode,2);
test.analiz(decode,over)
test.analizbigram(decode,over)
//test.print();

//for (var i=0; i<1000;i++) {
//const TestNumber = new helman();
//console.log()
//}

//  const Gen = new Generate();
//  for (let i = 0;i <20;i++)
//  {
//     console.log(Gen.create(2))
//  }

//const  TestRSA = new DoRSA();
//const  HashF = new HashClient(777,2);
