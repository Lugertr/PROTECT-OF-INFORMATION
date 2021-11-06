import * as fs from 'fs';

export default class Coder {
    pos = 0;
    code;
    decode="";
    uncode="";

    constructor(path,outpath,i) {                                       //чтение файла 
        try {
                       //fs = require('fs'); 
                       var readMe = fs.readFileSync(path,'utf8');
                }
                 catch{
                     throw new Error(`Не удалось прочитать файл`)
                }
        this.code = readMe;

        this.Ceaser(i);          

        this.decode = fs.writeFileSync(outpath, this.decode,  'utf8')
   }

   Ceaser(i) {
    while (this.pos < this.code.length) {
        var b = this.code[this.pos];
     //   if ((b.charCodeAt(0) >= 1072 && b.charCodeAt(0) <1102 ) || (b.charCodeAt(0) >= 1040 && b.charCodeAt(0) <1070)) {
     //       b=String.fromCharCode(b.charCodeAt(0)+i);
     //   }
        if ((b.charCodeAt(0) >= (1072) && b.charCodeAt(0) <= (1103-i) ) || (b.charCodeAt(0) >= 1040 && b.charCodeAt(0) <=(1071-i))) {
            b=String.fromCharCode(b.charCodeAt(0)+i);
        }

     //   else if ((b.charCodeAt(0)>=1070 && b.charCodeAt(0) < 1072) || (b.charCodeAt(0)>=1102 && b.charCodeAt(0) < 1104)) {
    //        b=String.fromCharCode(b.charCodeAt(0)-30);
     //   }

        else if ((b.charCodeAt(0)>(1071-i) && b.charCodeAt(0) < (1072)) || (b.charCodeAt(0)>(1103-i) && b.charCodeAt(0) < (1104))) {
            b=String.fromCharCode(b.charCodeAt(0)-(32-i));
        }
    
        this.decode=this.decode + b;
        this.pos=this.pos + 1;
    }
   }


printCeaser() {
    console.log(this.decode)
    //document.write(this.decode)
    }

print () {
    console.log(this.code)
    //document.write(this.code)
 }

 sortByFrequency(array) {
    var frequency = {};

    array.forEach(function(value) { frequency[value] = 0; });

    var uniques = array.filter(function(value) {
        return ++frequency[value] == 1;
    });

    return uniques.sort(function(a, b) {
        return frequency[b] - frequency[a];
    });
}

frequency(uncode1) {
    var ar=[];
    this.pos=0;
    while (this.pos < uncode1.length) {
       if (uncode1[this.pos].charCodeAt(0) >= (1040) && uncode1[this.pos].charCodeAt(0) <= (1103))
       ar.push(uncode1[this.pos]);
       this.pos=this.pos+1;
   }
  return this.sortByFrequency(ar)
} 

 analiz(Path,outpath) {
    var readMe = fs.readFileSync(Path,'utf8');
    var uncode1 = readMe.toLowerCase(); 
    var table = ['о','е','а','и','н','т','с','р','в','л','к','м','д','п','у','я','ы','ь','г','з','б','ч','й','х','ж','ш','ю','ц','щ','э','ф','ъ','ё'];
    var ourtable = this.frequency(uncode1);
    //console.log(this.frequencyBigram(uncode1,ourtable))
    for (var i=0;i<uncode1.length;i++)
    {  var m=0;
            while ((uncode1[i]!=ourtable[m]) && (m<table.length))
            {
                m=m+1;
            }
                if (m<table.length)
            this.uncode=this.uncode+table[m];
            else 
            this.uncode=this.uncode+uncode1[i];
    }
    fs.writeFileSync(outpath, this.uncode,  'utf8')
 }



frequencyBigram(uncode1,arr) {
    let ar=[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
for (let i=0;i<uncode1.length;i++)
    {  let m=0;
        m = this.findC(uncode1[i],arr);
        if (m<arr.length)
        {   let n;
            n = this.findC(uncode1[i+1],arr);
            if (n<arr.length)
            {   
                ar[m].push(arr[n]);
            }   
        }
    }
    for (let i=0;i<ar.length;i++)
    {
        ar[i]=this.sortByFrequency(ar[i]);
    }
    return ar;
}

 analizbigram(Path,outpath) {
    var readMe = fs.readFileSync(Path,'utf8');
    var uncode1 = readMe.toLowerCase(); 
    var table = ['о','е','а','и','н','т','с','р','в','л','к','м','д','п','у','я','ы','ь','г','з','б','ч','й','х','ж','ш','ю','ц','щ','э','ф','ъ','ё'];
    var table1 = [
    ['в','с','т','р','и','д','н','м'], //о 0
    ['н','т','р','с','л','в','м','и'], //е 1
    ['л','н','с','т','р','в','к','м'],//а 2
    ['с','н','в','и','е','м','к','з'], //и 3
    ['о','а','и','е','ы','н','у',''], //н 4
    ['о','а','е','и','ь','в','р','с'], //т 5
    ['т','к','о','я','е','ь','с','н'], //с 6
    ['а','е','о','и','у','я','ы','н'], //р 7
    ['о','а','и','ы','с','н','л','р'], //в 8
    ['и','е','о','а','ь','я','ю','у'], //л 9
    ['о','а','и','р','у','т','л','е'], //к 10
    ['м','е','о','у','а','н','п','ы'], //м 11
    ['е','а','и','о','н','у','р','в'], //д 12
    ['о','р','е','а','у','и','л',''], //п 13
    ['т','п','с','д','н','ю','ж',''], //у 14
    ['в','с','т','п','д','к','м','л'], //я 15
    ['л','х','е','м','и','в','с','н'], //ы 16
    ['н','к','в','п','с','е','о','и'], //ь 17
    ['о','а','р','л','и','в','',''], //г 18
    ['а','н','в','о','м','д','',''], //з 19
    ['о','ы','а','р','у','','',''], //б 20
    ['е','и','т','н','','','',''], //ч 21
    ['','','','','','','',''], //й 22
    ['о','и','с','н','в','п','р',''], //х 23
    ['е','и','д','а','н','','',''], //ж 24
    ['е','и','н','а','о','л',''], //ш 25
    ['д','т','щ','ц','н','п','',''], //ю 26
    ['и','е','а','ы','','','',''], //ц 27
    ['е','и','а','','','','',''], //щ 28
    ['н','т','р','с','к','','',''], //э 29
    ['и','е','о','а','','','',''], //ф 30
    ['','','','','','','',''], //ъ 31
    ['н','т','р','с','л','в','м','и'] ]  //ё 32
    let ourtable = this.frequency(uncode1);
    let ourtable1 = this.frequencyBigram(uncode1,ourtable) 
    for (let i=0;i<uncode1.length;i++)
    {  let m=0;
        m = this.findC(uncode1[i],ourtable)
        if (m<ourtable.length) 
        {   let n = this.findC(uncode1[i+1],ourtable1[m],9);
            if (i!=uncode1.length-1 && (n<9) && (ourtable1[m][n]!='') && table1[m][n]!=undefined)
            {   
                this.uncode=this.uncode+table[m]+table1[m][n];
                i=i+1;
            }
            else 
            {
                this.uncode=this.uncode+table[m];
            }
        }
                else { 
            this.uncode=this.uncode+uncode1[i];
                }
    }
    fs.writeFileSync(outpath, this.uncode,  'utf8')
 }

 findC(c,arr,i=34) 
 {  let m=0;
    while ((c!=arr[m]) && (m<=i))
    {
        m=m+1;
    }
    return m
 }


}   
