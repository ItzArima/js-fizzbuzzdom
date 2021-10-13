//impostiamo il for
for (let i=1; i<=100; i++){
    //fizz ogni 3 buzz ogni 5
    var fizz = i % 3;
    var buzz = i % 5;
    //scriviamo fizz
    if (fizz == 0){ 
        //scriviamo fizzbuzz se      
        if(buzz == 0){
            var p = document.createElement ("p");
            p.id = 'fizzbuzz';
            var content = document.createTextNode("Fizzbuzz");
        }
        else{
            var p = document.createElement ("p");
            var content = document.createTextNode("Fizz");
            p.id = 'fizz';
        }
    }
    //scriviamo buzz
    else if(buzz == 0){
        var p = document.createElement ("p");
        var content = document.createTextNode("Buzz");
        p.id = 'buzz';
    }
    //impostiamo il valore a standard
    else{
        var p = document.createElement ("p");
        var content = document.createTextNode(i)
        p.id = 'standard';
    }
    //impostiamo il valore dei blocchi stardard e inseriamo tutto nell'html
    const square = document.createElement ("div")
    square.appendChild(p);
    p.appendChild(content);
    var print = document.querySelector(".container");
    print.appendChild(square);
}