
for (let i=1; i<=100; i++){
    
    var fizz = i % 3;
    console.log(fizz);
    var buzz = i % 5;
    if (fizz == 0){
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
    else if(buzz == 0){
        var p = document.createElement ("p");
        var content = document.createTextNode("Buzz");
        p.id = 'buzz';
    }
    else{
        var p = document.createElement ("p");
        var content = document.createTextNode(i)
        p.id = 'standard';
    }
    const square = document.createElement ("div")
    square.appendChild(p);
    p.appendChild(content);
    var print = document.querySelector(".container");
    print.appendChild(square);
}