
for (let i=1; i<=100; i++){
    
    var fizz = i % 3;
    console.log(fizz);
    var buzz = i % 5;
    if (fizz == 0){
        if(buzz == 0){
            var p = document.createElement ("p");
            var content = document.createTextNode("Fizzbuzz");
        }
        else{
            var p = document.createElement ("p");
            var content = document.createTextNode("Fizz");
        }
    }
    else if(buzz == 0){
        var p = document.createElement ("p");
        var content = document.createTextNode("Buzz");
    }
    else{
        var p = document.createElement ("p");
        var content = document.createTextNode(i)
    }
    const square = document.createElement ("div")
    square.appendChild(p);
    p.appendChild(content);
    var print = document.querySelector(".container");
    print.appendChild(square);
}